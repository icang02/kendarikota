<?php

use App\Http\Controllers\HomeController;
use App\Meta;
use App\Models\Halaman;
use App\Models\Infografis;
use App\Models\OPD;
use App\Models\Pejabat;
use App\Models\Twibbon;
use App\Models\Youtube;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/tes', function () {
  return Inertia::render('Tes');
});

Route::get('/event/{menu}', [HomeController::class, 'menuEvent']);
Route::get('/arsip', [HomeController::class, 'menuArsip']);
Route::get('/peraturan-daerah', [HomeController::class, 'menuPerda']);
Route::get('/statistik', [HomeController::class, 'menuStatistik']);

// Guest route
Route::get('/', function () {
  Meta::addMeta('title', 'Portal Resmi Pemerintah Daerah KOta Kendari');
  Meta::addMeta('description', 'Kami siap mengabdi untuk Melayani Masyarakat demi terwujudnya kendari kota layak huni yang berbasis Ekologi, Informasi & Teknologi.');

  return Inertia::render('Welcome', [
    'youtube' => Youtube::all(),
    'pejabat' => Pejabat::with(['jabatan'])->limit(5)
      ->orderBy('jabatan_id')->get(),
    'infografis' => Infografis::limit(4)->orderBy('release', 'desc')->get(),
    'twibbon' => Twibbon::orderBy('created_at', 'desc')->first(),
  ]);
})->name('home');

Route::get('/kendari-kita/sejarah-kota-kendari', function () {
  Meta::addMeta('title', 'Portal Resmi Pemerintah Daerah KOta Kendari');
  Meta::addMeta('description', 'Kami siap mengabdi untuk Melayani Masyarakat demi terwujudnya kendari kota layak huni yang berbasis Ekologi, Informasi & Teknologi.');

  return Inertia::render('PageOne', [
    'title' => 'Sejarah Kota Kendari',
    'data' => Halaman::first()
  ]);
});

Route::get('/kendari-kita/visi-misi', function () {
  Meta::addMeta('title', 'Portal Resmi Pemerintah Daerah KOta Kendari');
  Meta::addMeta('description', 'Kami siap mengabdi untuk Melayani Masyarakat demi terwujudnya kendari kota layak huni yang berbasis Ekologi, Informasi & Teknologi.');

  return Inertia::render('PageOne', [
    'title' => 'Visi & Misi',
    'data' => Halaman::find(2)
  ]);
});

Route::get('/kendari-kita/walikota', function () {
  Meta::addMeta('title', 'Portal Resmi Pemerintah Daerah KOta Kendari');
  Meta::addMeta('description', 'Kami siap mengabdi untuk Melayani Masyarakat demi terwujudnya kendari kota layak huni yang berbasis Ekologi, Informasi & Teknologi.');

  $data = Pejabat::with('jabatan')->where('jabatan_id', 1)->first();
  return Inertia::render('PageTwo', [
    'title' => 'Profil Walikota',
    'data' => $data
  ]);
});

Route::get('/kendari-kita/wakil-walikota', function () {
  Meta::addMeta('title', 'Portal Resmi Pemerintah Daerah KOta Kendari');
  Meta::addMeta('description', 'Kami siap mengabdi untuk Melayani Masyarakat demi terwujudnya kendari kota layak huni yang berbasis Ekologi, Informasi & Teknologi.');

  $data = Pejabat::with('jabatan')->where('jabatan_id', 2)->first();
  return Inertia::render('PageTwo', [
    'title' => 'Profil Walikota',
    'data' => $data
  ]);
});

Route::get('/kendari-kita/pejabat-pemerintah', function () {
  Meta::addMeta('title', 'Portal Resmi Pemerintah Daerah KOta Kendari');
  Meta::addMeta('description', 'Kami siap mengabdi untuk Melayani Masyarakat demi terwujudnya kendari kota layak huni yang berbasis Ekologi, Informasi & Teknologi.');

  $pejabat = Pejabat::with(['jabatan', 'opd'])->limit(12)
    ->orderBy('jabatan_id')
    ->paginate(12);

  return Inertia::render('PageThree', [
    'title' => 'Pejabat Pemerintah',
    'pejabat' => $pejabat,
  ]);
});

Route::get('/kendari-kita/perangkat-daerah', function () {
  Meta::addMeta('title', 'Portal Resmi Pemerintah Daerah KOta Kendari');
  Meta::addMeta('description', 'Kami siap mengabdi untuk Melayani Masyarakat demi terwujudnya kendari kota layak huni yang berbasis Ekologi, Informasi & Teknologi.');

  $opd = OPD::get()
    ->groupBy('kategori');
  return Inertia::render('PageFour', [
    'title' => 'Perangkat Daerah',
    'opd'   => $opd
  ]);
});

Route::get('/api/pengumuman', function () {
  $response = Http::withHeaders([
    'X-Requested-With' => 'XMLHttpRequest',
  ])->get('https://berita.kendarikota.go.id/wp-json/wp/v2/posts', [
    'per_page' => 5,
    'categories' => 24,
  ]);

  $posts = $response->json();
  foreach ($posts as &$post) {
    $post['date'] = Carbon::parse($post['date'])->diffForHumans();
  }

  return response()->json($posts);
});

Route::get('/api/postbycategory', function () {
  // 22, 305, 306
  $response = Http::withHeaders([
    'X-Requested-With' => 'XMLHttpRequest',
  ])->get('https://berita.kendarikota.go.id/wp-json/wp/v2/posts', [
    'per_page' => 5,
    'categories' => 22,
  ]);

  $posts = $response->json();
  foreach ($posts as &$post) {
    $post['date'] = Carbon::parse($post['date'])->diffForHumans();
  }

  return response()->json($posts);
});


// Dashboard route
// Route::get('/dashboard', function () {
//   return Inertia::render('Dashboard');
// })->middleware(['auth', 'verified'])->name('dashboard');

// Route::middleware('auth')->group(function () {
//   Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
//   Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
//   Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
// });

// Auth route
// require __DIR__ . '/auth.php';

<?php

use App\Http\Controllers\HomeController;
use App\Models\Download;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
// use Inertia\Inertia;

Route::get('/tes', function () {
  // return Inertia::render('Tes');
  // $data = App\Models\Infografis::all();
  // $count = 0;
  // foreach ($data as $item) {
  //   if ($item->release != null) {
  //     $timestamp = $item->release;
  //     $count += 1;
  //     $datetime = Carbon::createFromTimestamp($timestamp)->toDateTimeString();
  //     $item->update(['releasee' => $datetime]);
  //   }
  // }

  // echo $count;

  // Ambil semua foto dari database
  // $data = Infografis::whereNotNull('img')->pluck('img')->toArray();

  // // Ambil semua file dalam folder infografis/2023
  // $files = Storage::disk('public')->files('infografis/2023');

  // // Hapus file yang tidak ada dalam database
  // foreach ($files as $file) {
  //   if (!in_array($file, $data)) {
  //     Storage::disk('public')->delete($file);
  //   }
  // }

  // // Hapus data di database jika tidak ada filenya di penyimpanan
  // Infografis::whereNotIn('img', $files)->delete();

  // echo "oke";
});

Route::get('/', [HomeController::class, 'index'])->name('home');
Route::get('/event/{menu}', [HomeController::class, 'menuEvent']);
Route::get('/arsip', [HomeController::class, 'menuArsip']);
Route::get('/peraturan-daerah', [HomeController::class, 'menuPerda']);
Route::get('/statistik', [HomeController::class, 'menuStatistik']);
Route::get('/direktori/{direktori}', [HomeController::class, 'menuDirektori']);
Route::get('/direktori/{direktori}/{lokasiId}', [HomeController::class, 'viewLokasi']);
Route::get('/kendari-kita/sejarah-kota-kendari', [HomeController::class, 'sejarah']);
Route::get('/kendari-kita/visi-misi', [HomeController::class, 'visiMisi']);
Route::get('/kendari-kita/walikota', [HomeController::class, 'walikota']);
Route::get('/kendari-kita/wakil-walikota', [HomeController::class, 'wakilWalikota']);
Route::get('/kendari-kita/pejabat-pemerintah', [HomeController::class, 'pejabat']);
Route::get('/kendari-kita/perangkat-daerah', [HomeController::class, 'perangkatDaerah']);
Route::get('/all-sub-domain', [HomeController::class, 'allSubDomain']);
Route::get('/all-twibbon', [HomeController::class, 'allTwibbon']);


Route::get('/api/pengumuman', function () {
  // Menentukan key untuk cache
  $cacheKey = 'pengumuman_posts';

  // Mengecek apakah data sudah ada di cache
  if (Cache::has($cacheKey)) {
    // Jika ada, ambil data dari cache
    $posts = Cache::get($cacheKey);
  } else {
    // Jika tidak ada, ambil data dari API eksternal
    $response = Http::withHeaders([
      'X-Requested-With' => 'XMLHttpRequest',
    ])->get('https://berita.kendarikota.go.id/wp-json/wp/v2/posts', [
      'per_page' => 5,
      'categories' => 22,
    ]);

    $posts = $response->json();

    // Format tanggal menggunakan Carbon
    foreach ($posts as &$post) {
      $post['date'] = Carbon::parse($post['date'])->diffForHumans();
    }

    Cache::put($cacheKey, $posts, now()->addMinutes(180));
  }

  return response()->json($posts);
});

Route::post('/api/count-download', function () {
  $data = Download::where('link', request('link'))->first();
  abort_if(!$data, 404);

  if (!Cookie::get('downloaded_id_' . $data->id)) {
    $data->increment('download');
    Cookie::queue('downloaded_id_' . $data->id, true, 10);
    $message = 'Success count download';
  }

  return response()->json([
    'message' => $message ?? 'Success. Nothing to update',
  ]);
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

<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Guest route
Route::get('/', function () {
  return Inertia::render('Welcome', [
    'canLogin' => Route::has('login'),
    'canRegister' => Route::has('register'),
    'laravelVersion' => Application::VERSION,
    'phpVersion' => PHP_VERSION,
  ]);
})->name('home');


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
Route::get('/dashboard', function () {
  return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
  Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
  Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
  Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

// Auth route
require __DIR__ . '/auth.php';

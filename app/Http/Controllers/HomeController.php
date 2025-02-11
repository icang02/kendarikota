<?php

namespace App\Http\Controllers;

use App\Models\Arsip;
use App\Models\Download;
use App\Models\Pengumuman;
use App\Models\Perda;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
  public function menuEvent($menu)
  {
    if ($menu == 'event') {
      //
    } else if ($menu == 'pengumuman') {
      return Inertia::render('EventPage', [
        'title' => ucfirst($menu),
        'data'  => Pengumuman::orderBy('tgl', 'desc')->get()
      ]);
    }

    return abort(404);
  }

  public function menuArsip()
  {
    return Inertia::render('EventPage', [
      'title' => 'Arsip',
      'data'  => Arsip::orderBy('release', 'desc')->limit(12)->get()
    ]);
  }

  public function menuPerda()
  {
    return Inertia::render('EventPage', [
      'title' => 'Peraturan Daerah',
      'data'  => Perda::orderBy('tanggal', 'desc')->limit(12)->get()
    ]);
  }

  public function menuStatistik()
  {
    return Inertia::render('EventPage', [
      'title' => 'Statistik',
      'data'  => Download::orderBy('tanggal', 'desc')->limit(12)->get()
    ]);
  }
}

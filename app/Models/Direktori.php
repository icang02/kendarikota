<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Direktori extends Model
{
  protected $table = 'direktori';
  protected $guarded = [''];

  public $timestamps = false;

  public function lokasi()
  {
    return $this->hasMany(Lokasi::class);
  }
}

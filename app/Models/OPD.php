<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;

class OPD extends Model
{
  protected $table = 'opd';
  protected $guarded = [''];

  public $timestamps = false;

  public function pejabat(): HasMany
  {
    return $this->hasMany(Pejabat::class);
  }

  public function kategori(): BelongsTo
  {
    return $this->belongsTo(KategoriOPD::class, 'kategori_opd_id');
  }
}

<?php

namespace App\Filament\Resources;

use App\Filament\Resources\OPDResource\Pages;
use App\Filament\Resources\OPDResource\RelationManagers;
use App\Models\OPD;
use App\Models\Pejabat;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Support\Colors\Color;
use Filament\Tables;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OPDResource extends Resource
{
  protected static ?string $model = OPD::class;

  protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
  protected static ?string $navigationLabel = 'Perangkat Daerah';
  protected static ?string $navigationGroup = 'Menu Kendari Kita';

  public static function getSlug(): string
  {
    return 'opd';
  }

  public static function form(Form $form): Form
  {
    return $form
      ->schema([
        //
      ]);
  }

  public static function table(Table $table): Table
  {
    return $table
      // ->query(
      //   OPD::query()->orderBy('kategori')
      // )
      ->columns([
        TextColumn::make('#')
          ->label('#')
          ->state(fn($rowLoop) => $rowLoop->iteration . '.')
          ->width('7%'),

        TextColumn::make('nama')
          ->label('Nama OPD')
          ->searchable()
          ->sortable(),

        BadgeColumn::make('kategori')
          ->label('Kategori')
          ->color('info')
          ->searchable()
          ->sortable()
      ])
      ->filters([
        //
      ])
      ->actions([
        Tables\Actions\EditAction::make(),
      ])
      ->bulkActions([
        Tables\Actions\BulkActionGroup::make([
          Tables\Actions\DeleteBulkAction::make(),
        ]),
      ]);
  }

  public static function getRelations(): array
  {
    return [
      //
    ];
  }

  public static function getPages(): array
  {
    return [
      'index' => Pages\ListOPDS::route('/'),
      'create' => Pages\CreateOPD::route('/create'),
      'edit' => Pages\EditOPD::route('/{record}/edit'),
    ];
  }
}

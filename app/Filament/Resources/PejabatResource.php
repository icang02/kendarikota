<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PejabatResource\Pages;
use App\Filament\Resources\PejabatResource\RelationManagers;
use App\Models\Pejabat;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Support\Colors\Color;
use Filament\Tables;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class PejabatResource extends Resource
{
  protected static ?string $model = Pejabat::class;

  protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
  protected static ?string $navigationLabel = 'Pejabat Pemerintah';
  protected static ?string $navigationGroup = 'Menu Kendari Kita';
  protected static ?int $navigationSort = 1;

  public static function getSlug(): string
  {
    return 'pejabat';
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
      ->columns([
        TextColumn::make('#')
          ->label('#')
          ->state(fn($rowLoop) => $rowLoop->iteration . '.')
          ->width('7%'),

        ImageColumn::make('foto')
          ->label('Logo')
          ->circular()
          ->default(asset('img/default/foto-pejabat.png')),

        TextColumn::make('nama')
          ->label('Nama Lengkap')
          ->searchable()
          ->sortable(),

        BadgeColumn::make('jabatan.nama')
          ->label('Jabatan')
          ->color('info')
          // ->color(Color::hex('#A1E3F9'))
          ->searchable()
          ->sortable(),
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
      'index' => Pages\ListPejabats::route('/'),
      'create' => Pages\CreatePejabat::route('/create'),
      'edit' => Pages\EditPejabat::route('/{record}/edit'),
    ];
  }
}

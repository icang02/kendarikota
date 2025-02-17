<?php

namespace App\Filament\Resources;

use App\Filament\Resources\KategoriOPDResource\Pages;
use App\Filament\Resources\KategoriOPDResource\RelationManagers;
use App\Filament\Resources\KategoriOPDResource\RelationManagers\OpdRelationManager;
use App\Models\KategoriOPD;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class KategoriOPDResource extends Resource
{
  protected static ?string $model = KategoriOPD::class;

  protected static ?string $navigationIcon = 'heroicon-o-building-office';
  protected static ?string $navigationLabel = 'OPD';
  protected static ?string $navigationGroup = 'Menu Profil';

  public static function getSlug(): string
  {
    return 'opd';
  }

  public static function form(Form $form): Form
  {
    return $form
      ->schema([
        Forms\Components\TextInput::make('nama')
          ->label('Nama OPD')
          ->required()
          ->maxLength(255),
      ]);
  }

  public static function table(Table $table): Table
  {
    return $table
      ->columns([
        Tables\Columns\TextColumn::make('#')
          ->label('#')
          ->state(fn($rowLoop) => $rowLoop->iteration . '.')
          ->width('7%'),

        Tables\Columns\TextColumn::make('nama')
          ->label('Nama OPD')
          ->searchable()
          ->sortable(),

        Tables\Columns\BadgeColumn::make('opd_count')
          ->label('Total Data')
          ->counts('opd') // Menghitung jumlah relasi OPD
          ->color(fn(int $state): string => 'success'),
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
      OpdRelationManager::class,
    ];
  }

  public static function getPages(): array
  {
    return [
      'index' => Pages\ListKategoriOPDS::route('/'),
      'create' => Pages\CreateKategoriOPD::route('/create'),
      'edit' => Pages\EditKategoriOPD::route('/{record}/edit'),
    ];
  }
}

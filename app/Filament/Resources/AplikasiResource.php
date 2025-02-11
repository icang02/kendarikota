<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AplikasiResource\Pages;
use App\Filament\Resources\AplikasiResource\RelationManagers;
use App\Models\Aplikasi;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AplikasiResource extends Resource
{
  protected static ?string $model = Aplikasi::class;

  protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
  protected static ?string $navigationLabel = 'Aplikasi Kendarikota';
  protected static ?string $navigationGroup = 'Data lainnya';
  protected static ?int $navigationSort = 99;

  public static function getSlug(): string
  {
    return 'aplikasi';
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

        ImageColumn::make('icon')
          ->label('Logo')
          ->circular()
          ->default(asset('img/default/icon-aplikasi.png')),

        TextColumn::make('nama')
          ->label('Nama Aplikasi')
          ->searchable()
          ->sortable(),

        BadgeColumn::make('link')
          ->label('URL Aplikasi')
          ->color('success')
          ->formatStateUsing(fn(string $state): string => 'Kunjungi')
          ->url(fn(string $state): string => $state, true)
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
      'index' => Pages\ListAplikasis::route('/'),
      'create' => Pages\CreateAplikasi::route('/create'),
      'edit' => Pages\EditAplikasi::route('/{record}/edit'),
    ];
  }
}

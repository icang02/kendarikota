<?php

namespace App\Filament\Resources;

use App\Filament\Resources\InfografisResource\Pages;
use App\Filament\Resources\InfografisResource\RelationManagers;
use App\Models\Infografis;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class InfografisResource extends Resource
{
  protected static ?string $model = Infografis::class;

  protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
  protected static ?string $navigationLabel = 'Infografis';
  protected static ?string $navigationGroup = 'Data lainnya';

  public static function getSlug(): string
  {
    return 'infografis';
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
      ->query(
        Infografis::query()->orderBy('release', 'desc')
      )
      ->columns([
        TextColumn::make('#')
          ->label('#')
          ->state(fn($rowLoop) => $rowLoop->iteration . '.')
          ->width('7%'),

        TextColumn::make('title')
          ->label('judul')
          ->sortable()
          ->searchable(),

        TextColumn::make('release')
          ->label('Release')
          ->dateTime('d F Y')
          ->sortable(),


        ImageColumn::make('img')
          ->label('Gambar')
          ->width('150px')
          ->height('auto'),
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
      'index' => Pages\ListInfografis::route('/'),
      'create' => Pages\CreateInfografis::route('/create'),
      'edit' => Pages\EditInfografis::route('/{record}/edit'),
    ];
  }
}

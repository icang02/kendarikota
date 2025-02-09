<?php

namespace App\Filament\Resources;

use App\Filament\Resources\JabatanResource\Pages;
use App\Filament\Resources\JabatanResource\RelationManagers;
use App\Models\Jabatan;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class JabatanResource extends Resource
{
  protected static ?string $model = Jabatan::class;

  protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
  protected static ?string $navigationLabel = 'Jabatan';

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
        TextColumn::make('nama')
          ->label('Nama Jabatan')
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
      'index' => Pages\ListJabatans::route('/'),
      'create' => Pages\CreateJabatan::route('/create'),
      'edit' => Pages\EditJabatan::route('/{record}/edit'),
    ];
  }
}

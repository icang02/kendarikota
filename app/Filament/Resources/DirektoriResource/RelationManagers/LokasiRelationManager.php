<?php

namespace App\Filament\Resources\DirektoriResource\RelationManagers;

use App\Models\Lokasi;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class LokasiRelationManager extends RelationManager
{
  protected static string $relationship = 'lokasi';

  public function form(Form $form): Form
  {
    return $form
      ->schema([
        Forms\Components\Grid::make(2)
          ->schema([
            Forms\Components\TextInput::make('nama')
              ->required()
              ->maxLength(255),
            Forms\Components\Select::make('direktori_id')
              ->label('Direktori')
              ->options(\App\Models\Direktori::pluck('nama', 'id'))
              ->searchable()
              ->required()
              ->default(fn() => $this->ownerRecord->id),
            Forms\Components\Textarea::make('alamat')
              ->required()
              ->rows(4),
            Forms\Components\TextInput::make('telp')
              ->label('No. Kontak')
              ->maxLength(50),
            Forms\Components\TextInput::make('latitude')
              ->required()
              ->maxLength(255),
            Forms\Components\TextInput::make('longitude')
              ->required()
              ->maxLength(255),
          ])
      ]);
  }

  public function table(Table $table): Table
  {
    return $table
      ->recordTitleAttribute('nama')
      ->modifyQueryUsing(fn($query) => $query->orderBy('id', 'desc'))
      ->columns([
        Tables\Columns\TextColumn::make('nama')
          ->width('20%')
          ->wrap(),
        Tables\Columns\TextColumn::make('alamat')
          ->width('30%')
          ->wrap(),
        Tables\Columns\TextColumn::make('telp')
          ->width('20%')
          ->wrap()
          ->label('No. Kontak'),
        Tables\Columns\TextColumn::make('latitude'),
        Tables\Columns\TextColumn::make('longitude'),

      ])
      ->filters([
        //
      ])
      ->headerActions([
        Tables\Actions\CreateAction::make(),
      ])
      ->actions([
        Tables\Actions\EditAction::make(),
        Tables\Actions\DeleteAction::make(),
      ])
      ->bulkActions([
        Tables\Actions\BulkActionGroup::make([
          Tables\Actions\DeleteBulkAction::make(),
        ]),
      ]);
  }
}

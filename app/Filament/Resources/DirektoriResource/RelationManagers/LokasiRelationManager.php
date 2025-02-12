<?php

namespace App\Filament\Resources\DirektoriResource\RelationManagers;

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
        Forms\Components\TextInput::make('nama')
          ->required()
          ->maxLength(255),
        Forms\Components\Select::make('direktori_id')
          ->label('Direktori')
          ->options(\App\Models\Direktori::pluck('nama', 'id'))
          ->searchable()
          ->required(),
      ]);
  }

  public function table(Table $table): Table
  {
    return $table
      ->recordTitleAttribute('nama')
      ->columns([
        Tables\Columns\TextColumn::make('nama'),
        Tables\Columns\TextColumn::make('alamat')
          ->width('300px')
          ->wrap(),
        Tables\Columns\TextColumn::make('telp')->label('No. Kontak'),
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

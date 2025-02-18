<?php

namespace App\Filament\Resources\KategoriOPDResource\RelationManagers;

use App\Models\OPD;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class OpdRelationManager extends RelationManager
{
  protected static string $relationship = 'opd';

  public function form(Form $form): Form
  {
    return $form
      ->schema([
        Forms\Components\Grid::make(2)
          ->schema([
            Forms\Components\Grid::make(1)
              ->schema([
                Forms\Components\TextInput::make('nama')
                  ->required()
                  ->placeholder('Nama')
                  ->maxLength(255),
                Forms\Components\Select::make('kategori_opd_id')
                  ->label('Pilih OPD')
                  ->options(\App\Models\KategoriOPD::pluck('nama', 'id'))
                  ->searchable()
                  ->required()
                  ->default(fn() => $this->ownerRecord->id),
              ])->columnSpan(1),

            Forms\Components\Grid::make(1)->schema([
              Forms\Components\FileUpload::make('struktur_new')
                ->label('Struktur OPD')
                ->required()
                ->disk('public')
                ->directory('dokumen/' . date('Y'))
                ->helperText('Max upload file 100MB. Type file: .pdf')
                ->acceptedFileTypes(['application/pdf'])
                ->maxSize(102400)
            ])->columnSpan(1),
          ])
      ]);
  }

  public function table(Table $table): Table
  {
    return $table
      ->recordTitleAttribute('nama')
      ->defaultSort('id', 'desc')
      ->columns([
        Tables\Columns\TextColumn::make('#')
          ->label('#')
          ->state(fn($rowLoop) => $rowLoop->iteration . '.')
          ->width('7%'),
        Tables\Columns\TextColumn::make('nama')
          ->searchable()
          ->sortable(),
        BadgeColumn::make('struktur_new')
          ->label('File')
          ->color('info')
          ->formatStateUsing(fn(?string $state) => 'Lihat')
          ->url(fn(?string $state): ?string => $state ? asset("storage/$state") : null, true),
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

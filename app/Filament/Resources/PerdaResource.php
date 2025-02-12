<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PerdaResource\Pages;
use App\Filament\Resources\PerdaResource\RelationManagers;
use App\Models\Perda;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Illuminate\Support\Carbon;

class PerdaResource extends Resource
{
  protected static ?string $model = Perda::class;

  protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
  protected static ?string $navigationLabel = 'Peraturan Daerah';
  protected static ?string $navigationGroup = 'Menu Peraturan Daerah';
  protected static ?int $navigationSort = 50;

  public static function getSlug(): string
  {
    return 'peraturan-daerah';
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
        Perda::query()->orderBy('tanggal', 'desc')
      )
      ->columns([
        TextColumn::make('#')
          ->label('#')
          ->state(fn($rowLoop) => $rowLoop->iteration . '.')
          ->width('7%'),

        TextColumn::make('no_perda')
          ->searchable()
          ->sortable(),

        TextColumn::make('tentang')
          ->width('400px')
          ->searchable()
          ->wrap()
          ->sortable(),

        BadgeColumn::make('file')
          ->label('Data File')
          ->color('info')
          ->formatStateUsing(fn(?string $state) => 'Data File')
          ->url(fn(?string $state): ?string => $state, true),

        TextColumn::make('tanggal')
          ->sortable()
          ->formatStateUsing(fn($state) => Carbon::createFromTimestamp($state)->toDateString()),
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
      'index' => Pages\ListPerdas::route('/'),
      'create' => Pages\CreatePerda::route('/create'),
      'edit' => Pages\EditPerda::route('/{record}/edit'),
    ];
  }
}

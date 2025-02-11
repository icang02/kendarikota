<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArsipResource\Pages;
use App\Filament\Resources\ArsipResource\RelationManagers;
use App\Models\Arsip;
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

use function PHPUnit\Framework\isNull;

class ArsipResource extends Resource
{
  protected static ?string $model = Arsip::class;

  protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
  protected static ?string $navigationLabel = 'Arsip';
  protected static ?string $navigationGroup = 'Dokumen';

  public static function getSlug(): string
  {
    return 'arsip';
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

        TextColumn::make('judul')
          ->searchable()
          ->sortable()
          ->width('400px')
          ->wrap(),

        TextColumn::make('sumber')
          ->searchable()
          ->sortable(),

        BadgeColumn::make('link')
          ->label('Link File')
          ->color('info')
          ->formatStateUsing(fn(?string $state) => 'Lihat')
          ->url(fn(?string $state): ?string => $state, true),

        TextColumn::make('release')
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
      'index' => Pages\ListArsips::route('/'),
      'create' => Pages\CreateArsip::route('/create'),
      'edit' => Pages\EditArsip::route('/{record}/edit'),
    ];
  }
}

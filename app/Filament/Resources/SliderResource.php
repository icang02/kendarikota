<?php

namespace App\Filament\Resources;

use App\Filament\Resources\SliderResource\Pages;
use App\Filament\Resources\SliderResource\RelationManagers;
use App\Models\Slider;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class SliderResource extends Resource
{
  protected static ?string $model = Slider::class;

  protected static ?string $navigationIcon = 'heroicon-o-photo';
  protected static ?string $navigationLabel = 'Slider Beranda';
  protected static ?string $navigationGroup = 'Data lainnya';

  public static function getSlug(): string
  {
    return 'slider';
  }

  public static function form(Form $form): Form
  {
    return $form
      ->schema([
        Forms\Components\FileUpload::make('image')
          ->label('Upload Gambar')
          ->image()
          ->maxSize(1024)
          ->disk('public')
          ->directory('slider')
          ->required(),
        Forms\Components\Select::make('is_banner')
          ->options([
            0 => 'Slider',
            1 => 'Banner',
          ])
          ->label('Tampilkan Sebagai')
          ->required()
      ]);
  }

  public static function table(Table $table): Table
  {
    return $table
      ->query(
        Slider::query()->orderBy('id', 'desc')
      )
      ->columns([
        Tables\Columns\TextColumn::make('#')
          ->label('#')
          ->state(fn($rowLoop) => $rowLoop->iteration . '.')
          ->width('7%'),
        Tables\Columns\ImageColumn::make('image')
          ->label('Gambar')
          ->width('300px')
          ->height('auto'),
        BadgeColumn::make('is_banner')
          ->label('Tampilkan Sebagai')
          ->color(fn(string $state): string => $state == 1 ? 'success' : 'info')
          ->formatStateUsing(fn(string $state): string => $state == 1 ? 'BANNER' : 'SLIDER')
          ->url(fn(string $state): string => $state, true)

      ])
      ->filters([
        //
      ])
      ->actions([
        Tables\Actions\DeleteAction::make(),
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
      'index' => Pages\ListSliders::route('/'),
      // 'create' => Pages\CreateSlider::route('/create'),
      // 'edit' => Pages\EditSlider::route('/{record}/edit'),
    ];
  }
}

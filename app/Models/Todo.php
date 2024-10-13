<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Todo extends Model
{
    use HasFactory;
    // $fillable に定義されたフィールドは、ユーザーがリクエストを通してデータをモデルに一括で割り当てる際に、保存できる属性のリストです。
    // $fillable を使うことで、セキュリティの確保を目的としています。リクエストから予期しないデータが送信されても、許可されたフィールドのみをデータベースに保存できるように制限することで、マスアサインメント脆弱性を防ぎます。
    protected $fillable = ['content'];
}

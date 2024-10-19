<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Todo;

class TodoController extends Controller
{
    // 新しいTodoを追加するメソッド
    public function setTodo(Request $request)
    {
        // リクエストのバリデーション: 'content' フィールドが必須であり、文字列で、最大255文字までであることを検証
        $request->validate([
            'content' => 'required|string|max:255'
        ]);

        // Todoを作成してデータベースに保存
        $todo = Todo::create([
            'content' => $request->content
        ]);

        // 作成したTodoをJSON形式で返す
        return response()->json($todo, 201); // ステータスコード201で返す
    }

    // 全てのTodoを取得して返すメソッド
    public function index()
    {
        // Todoのすべてのレコードを取得して変数に格納
        $todos = Todo::all();

        // 取得したTodoのリストをJSON形式で返す
        return response()->json($todos);
    }

    public function deleteTodo($id){

        $todo = Todo::find($id);

        if($todo){
            $todo->delete();
        }

    }

    // Todoのcontentを更新するメソッド
    public function updateTodo(Request $request, $id)
    {
        // リクエストのバリデーション: 'content' フィールドが必須であり、文字列で、最大255文字までであることを検証
        $request->validate([
            'content' => 'required|string|max:255'
        ]);

        // 指定されたIDのTodoを取得
        $todo = Todo::find($id);

        if ($todo) {
            // Todoのcontentを更新
            $todo->content = $request->content;
            $todo->save(); // 更新をデータベースに保存

            // 更新したTodoをJSON形式で返す
            return response()->json($todo, 200); // ステータスコード200で返す
        }

        // Todoが見つからない場合は404を返す
        return response()->json(['message' => 'Todo not found'], 404);
    }


}


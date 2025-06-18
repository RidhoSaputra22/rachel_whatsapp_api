<?php

namespace App\Http\Controllers;

use App\Models\Chat;
use App\Http\Requests\StoreChatRequest;
use App\Http\Requests\UpdateChatRequest;
use App\Models\Message;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ChatController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $chat = Chat::with('messages')->get();

        return response()->json($chat);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $valodator = Validator::make($request->all(), [
            'user_id' => 'required',
            'chat_id' => 'required',
            'content' => 'required',
            'time' => 'required',
            'photo' => 'nullable',
        ]);

        if ($valodator->fails()) {
            return response()->json($valodator->errors(), 422);
        }

        $chat = Message::create([
            'user_id' => $request->user_id,
            'chat_id' => $request->chat_id,
            'content' => $request->content,
            'time' => $request->time,
            'photo' => $request->photo,
        ]);

        return response()->json([
            'message' => 'Message created successfully',
            'chat' => $chat,
            'status' => 200,
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Chat $chat)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Chat $chat)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateChatRequest $request, Chat $chat)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Chat $chat)
    {
        //
    }
}

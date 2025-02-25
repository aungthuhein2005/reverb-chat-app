<?php

namespace App\Http\Controllers;

use App\Events\MessageSent;
use App\Models\Message;
use Illuminate\Http\Request;

class MessageSentController extends Controller
{
    public function sent(Request $request){
        $validated = $request->validate([
            'receiver_id' => 'required|integer',
            'message' => 'required|string',
        ]);
        
        $validated['sender_id'] = auth()->id();
        
        $message = Message::create($validated);
        
        broadcast(new MessageSent($message));
        
        return response()->json([
            'status' => 'Message broadcasted successfully!',
            'data' => $message
        ]);
    }

    public function getMessages(Request $request){
        $messages = Message::where(function($query) use ($request) {
            $query->where('sender_id', $request->receiver_id)
                  ->where('receiver_id', auth()->id());
        })->orWhere(function($query) use ($request) {
            $query->where('sender_id', auth()->id())
                  ->where('receiver_id', $request->receiver_id);
        })
        ->with('sender', 'receiver')
        ->get();
        
        return response()->json([
            'status' => 'Messages fetched successfully!',
            'data' => $messages,
        ]);
    }
}

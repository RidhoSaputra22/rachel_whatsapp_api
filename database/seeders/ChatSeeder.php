<?php

namespace Database\Seeders;

use App\Models\Chat;
use App\Models\Message;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ChatSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        //
        $chats = [
            [
                "name" => 'Gudang data C (TI)',
                "subtitle" => 'Anya: baik ibu trimakasih',
                "time" => '17.26',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png',

            ],
            [
                "name" => '6TKJA-I (Kamis 09:20-11-00',
                "subtitle" => 'Asmah: baik ibu',
                "time" => '16.49',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png',

            ],
            [
                "name" => 'GP24_6TPML-G_SELKAM_13.40',
                "subtitle" => '~ Ardi Man: Maaf B311',
                "time" => '14.07',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png'
            ],
            [
                "name" => '6TNosql G',
                "subtitle" => 'Deli: Assalamualaikum ibu,saya atas nama deli ...',
                "time" => '13.58',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png'
            ],
            [
                "name" => 'KKL Gel X 2024-2025',
                "subtitle" => '~ Mama Abi: Done',
                "time" => '13.38',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/kkl.png'
            ],
            [
                "name" => 'TEKNOLOGI BIG DATA-G (20242)',
                "subtitle" => 'Nita: Iya ibu',
                "time" => '11.48',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png'
            ],
            [
                "name" => 'Mhsw TI Angk 2022',
                "subtitle" => '~ is: Menunggu pesan ini. Tindakan ini mun...',
                "time" => 'Kemarin',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png'
            ],
            [
                "name" => 'Klp 5 PPGT-JS',
                "subtitle" => '~ Liam: Shalom, Semangat Pagi Salam S...',
                "time" => 'Kemarin',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/klp5.png'
            ],
            [
                "name" => '+62 887-0476-6974',
                "subtitle" => "Anda bereaksi pada: 'Foto'",
                "time" => 'Kemarin',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/org.png'
            ],
            [
                "name" => 'PA Asrul Syam',
                "subtitle" => 'Ellen bergabung via tautan undangan',
                "time" => 'Sabtu',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png'
            ],
            [
                "name" => '6TGKT-H_Rabu_13.40',
                "subtitle" => '~ Imran Dj: Tolong ya yg lain bantu bantu like j...',
                "time" => 'Sabtu',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png'
            ],
            [
                "name" => '6TSTI-J Sistem Testing dan imple...',
                "subtitle" => '~ menambahkan Gabriel',
                "time" => 'Jumat',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png'
            ],
            [
                "name" => '6TTWS-I TEKNOLOGI WEB SERVIS',
                "subtitle" => '~ Akmal menambahkan ~ Ocang',
                "time" => 'Kamis',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/tws.png'
            ],
            [
                "name" => 'Short Film',
                "subtitle" => 'Hanya pesan yang menyebut @Meta AI yang ...',
                "time" => 'Rabu',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png'
            ],
            [
                "name" => 'Program Profesional 2024-2 (6TPP...',
                "subtitle" => '~ Cikal Rafikal: Baik pak',
                "time" => 'Rabu',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png'
            ],
            [
                "name" => "Z'Vloce",
                "subtitle" => '~ nayy: omaga bsk pa kesitu:")',
                "time" => '18/4/2025',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/voice.png'
            ],
            [
                "name" => '6TROP-I',
                "subtitle" => '+62 896-7182-2984 diagnti ke +62 878-4683-...',
                "time" => '16/4/2025',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/grup.png'
            ],
            [
                "name" => "bu' Suci",
                "subtitle" => 'Iya ibu, terima kasih',
                "time" => '10/4/2025',
                "avatarUrl" => 'https://raw.githubusercontent.com/Rachel0404/Assets/b37c9b4ce177af9457bf078cd404a0302546c2cb/pribadi.png'
            ],
        ];
        foreach ($chats as $chat) {
            $c = Chat::create([
                'name' => $chat['name'],
                'subtitle' => $chat['subtitle'],
                'time' => $chat['time'],
                'avatarUrl' => $chat['avatarUrl'],
                'user_id' => 1
            ]);
            foreach ($chat['message'] ?? [] as $message) {
                Message::create([
                    'content' => $message['content'],
                    'user_id' => $message['user_id'],
                    'chat_id' => $c->id
                ]);
            }
        };
    }
}

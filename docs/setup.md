# 環境構築

## Supabase との連携

次の手順は, 全ての依存関係をインストールした後に実行してください.

1. ローカル環境の Supabase で認証機能を使うために, Supabase アカウントでログイン

   ```sh
   npx supabase login
   ```

1. `meibo-system-v2` プロジェクトとローカル環境の Supabase と連携

   ```sh
   npx supabase link --project-ref $PROJECT_ID
   ```

   > [!IMPORTANT]
   >
   > - `$PROJECT_ID` を適切に置き換えてください！
   > - データベースの Pull には, データベースのパスワードが必要です. 入力したパスワードは表示されません！

1. データベースを Pull (ここより下は DB に変更が加わったときも実行する)

   ```sh
   yarn run supabase:db:pull
   ```

   おそらく, `Update remote migration history table? [Y/n]` と聞かれます. History の更新は不要ですので `n⏎` で拒否してください.

1. ローカル環境の Supabase を起動  
   Supabase のコンテナが起動します. 少し時間がかかるかもしれません.

   ```sh
   yarn run supabase:start
   ```

1. データベースにマイグレーションを適用  
   次のコマンドで, 既に作成されているデータベースにマイグレーションを適用します.

   ```sh
   yarn run supabase:db:reset
   ```

ここまで行ったら, <http://127.0.0.1:54323> へアクセスして, ローカル環境の Supabase にアクセスできるか確認してください.

お片付け

```sh
yarn run supabase:stop
```

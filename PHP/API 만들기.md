#API 만들기
    <form action="/api/user/gold_using_list" method="post">
        auth_token <input type="text" name="auth_token" value="<?=$device_authkey?>"> * <br>
        cursor <input type="text" name="cursor" value=""><br>
        limit <input type="text" name="limit" value=""><br><br>
        <input type="submit">
    </form>

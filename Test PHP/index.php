<?
if (!empty($_POST)) {
    require __DIR__ . '/auth.php';

    $login = $_POST['login'] ?? '';
    $password = $_POST['password'] ?? '';

    if (checkAuth($login, $password)) {
        setcookie('login', $login, 0, '/');
        setcookie('password', $password, 0, '/');
        header('Location: /part1.php');
    } else {
        $error = 'Ошибка авторизации! Пользователь не найден.';
    }
}
 ?>

<body>     
    <h1>Тест по языкам программирования</h1>
    <table width = 400>
        <tr>
            <td align = center> 

                <?php if (isset($error)): ?>
                <span style="color: red;">
                    <?= $error ?>
                </span>
                <?php endif; ?>

                <form action="index.php" method="POST"> 

                <label for="login">Имя пользователя: </label><input type="text" name="login" id="login">
                <br>
                <label for="password">Пароль: </label><input type="password" name="password" id="password">
                <br>
                <input type ="submit" name="Submit" value="Отправить запрос."> 
                </form>  
            </td>
        </tr>
    </table>
</body>  
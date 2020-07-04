


var userLang = navigator.language || navigator.userLanguage;
if(userLang.substring(0,2) == 'nl'){
    window.location.href = '/nl/';



function check_for_redirect() {
    $days_to_expire = 30;

    if (!is_admin() && !isset($_COOKIE['already_visited'])) {
        setcookie('already_visited', true, time() + 86400 * $days_to_expire);
        wp_redirect('https://dev.doque.nl/', 302); //change the URL and status to whatever you want
        exit;
    }
}
add_action('init', 'check_for_redirect');

$pixel = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII="
$bytes = [Convert]::FromBase64String($pixel)

$files = @(
    "images/games/banners/sunset-overdrive-banner.jpg",
    "images/games/banners/neon-white-banner.jpg",
    "images/games/banners/vanquish-banner.jpg",
    "images/games/banners/midnight-fight-express-banner.jpg",
    "images/games/banners/the-pathless-banner.jpg",
    "images/games/banners/a-hat-in-time-banner.jpg",
    "images/games/banners/solar-ash-banner.jpg",
    "images/games/posters/sunset-overdrive-poster.jpg",
    "images/games/posters/neon-white-poster.jpg",
    "images/games/posters/vanquish-poster.jpg",
    "images/games/posters/midnight-fight-express-poster.jpg",
    "images/games/posters/the-pathless-poster.jpg",
    "images/games/posters/a-hat-in-time-poster.jpg",
    "images/games/posters/solar-ash-poster.jpg"
)

foreach ($f in $files) {
    [IO.File]::WriteAllBytes($f, $bytes)
    Write-Host "Created $f"
}

<?php
$text = "Hello, welcome to the world of PHP!";
echo strtoupper($text) . "\n"; // Convert to uppercase

$replacedText = str_replace("PHP", "programming", $text);
echo $replacedText . "\n"; // Replace "PHP" with "programming"

$position = strpos($text, "world");
if ($position !== false) {
    echo "The word 'world' is found at position: " . $position . "\n";
} else {
    echo "The word 'world' is not found.\n";
}
?>

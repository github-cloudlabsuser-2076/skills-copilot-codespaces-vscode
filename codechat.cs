if (int.TryParse(Console.ReadLine(), out choice))
{
    switch (choice)
    {
        case 1:
            Console.WriteLine("You go farther into the forest and discover a treasure chest!");
            score += 10;
            break;

        case 2:
            Console.WriteLine("You rest by the campfire and regain 20 health.");
            health += 20;
            break;

        case 3:
            Console.WriteLine($"Thanks for playing! Your score: {score}");
            return;

        default:
            Console.WriteLine("Invalid choice. Try again.");
            break;
    }

    health -= 10;
    if (health <= 0)
    {
        Console.WriteLine($"Game over. Your score: {score}");
    }
}
else
{
    Console.WriteLine("Invalid input. Please enter a valid number.");
}
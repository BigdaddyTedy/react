import pygame
import random

# Set up pygame
pygame.init()

# Set up window dimensions
WIDTH = 800
HEIGHT = 600

# Set up colors
WHITE = (255, 255, 255)
BLACK = (0, 0, 0)

# Set up ball properties
BALL_RADIUS = 20
ball_x = WIDTH // 2
ball_y = HEIGHT // 2
ball_speed_x = random.randint(-5, 5)
ball_speed_y = random.randint(-5, 5)

# Set up window
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Ball Movement")

# Game loop
running = True
while running:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False
        elif event.type == pygame.MOUSEBUTTONDOWN and event.button == 1:
            # Check if left mouse button is clicked
            mouse_x, mouse_y = event.pos
            # Draw a ball at the mouse click location
            pygame.draw.circle(screen, BLACK, (mouse_x, mouse_y), BALL_RADIUS)

    # Move the ball
    ball_x += ball_speed_x
    ball_y += ball_speed_y

    # Check for collision with window edges
    if ball_x <= 0 or ball_x >= WIDTH:
        ball_speed_x = -ball_speed_x
    if ball_y <= 0 or ball_y >= HEIGHT:
        ball_speed_y = -ball_speed_y

    # Fill the screen with white color
    screen.fill(WHITE)

    # Draw the ball
    pygame.draw.circle(screen, BLACK, (ball_x, ball_y), BALL_RADIUS)

    # Update the display
    pygame.display.flip()

    # Set frames per second
    pygame.time.Clock().tick(60)

# Quit pygame
pygame.quit()
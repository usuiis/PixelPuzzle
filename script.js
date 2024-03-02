import pygame
import random

# Initialize Pygame
pygame.init()

# Screen dimensions
SCREEN_WIDTH = 800
SCREEN_HEIGHT = 600

# Colors
WHITE = (255, 255, 255)
RED = (255, 0, 0)

# Create the screen
screen = pygame.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
pygame.display.set_caption("PixelPuzzle")

# Main loop
running = True
clock = pygame.time.Clock()

while running:
    screen.fill(WHITE)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    for i in range(0, SCREEN_WIDTH, 20):
        pygame.draw.line(screen, RED, (i, 0), (i, SCREEN_HEIGHT))
    for j in range(0, SCREEN_HEIGHT, 20):
        pygame.draw.line(screen, RED, (0, j), (SCREEN_WIDTH, j))

    pygame.display.flip()
    clock.tick(30)

pygame.quit()

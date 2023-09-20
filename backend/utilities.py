def find_path_size(grid):
    # Check if the grid is empty
    if not grid:
        return 0

    def dfs(row, col):
        # Check if we are out of bounds or if the cell is not part of the path
        if row < 0 or row >= len(grid) or col < 0 or col >= len(grid[0]) or grid[row][col] == 0:
            return 0

        # Mark the current cell as visited (set it to 0)
        grid[row][col] = 0

        # Explore adjacent cells
        count = 1
        count += dfs(row + 1, col)  # Explore down
        count += dfs(row - 1, col)  # Explore up
        count += dfs(row, col + 1)  # Explore right
        count += dfs(row, col - 1)  # Explore left
        count += dfs(row + 1, col + 1)  # Explore diagonal down-right
        count += dfs(row - 1, col + 1)  # Explore diagonal up-right
        count += dfs(row + 1, col - 1)  # Explore diagonal down-left
        count += dfs(row - 1, col - 1)  # Explore diagonal up-left
        return count

    connected_ones_count = 0

    # Iterate through the grid and find connected ones
    for row in range(len(grid)):
        for col in range(len(grid[0])):
            if grid[row][col] == 1:
                connected_ones_count += dfs(row, col)

    # Return the total size of connected ones
    return connected_ones_count
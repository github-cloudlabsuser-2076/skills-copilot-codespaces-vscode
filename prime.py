def prime(n):           # a function to check if a number is prime
    if n <= 1: return False
    for i in range(2, n):
        if n % i == 0:
            return False
    return True
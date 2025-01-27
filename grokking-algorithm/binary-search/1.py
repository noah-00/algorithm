def binary_search(arr, item):
  low = 0                                   # ①
  high = len(arr) - 1                       # ①

  while low <= high:                        # ②
    mid = (low + high) // 2                 # ③
    guess = arr[mid]
    if guess == item:                       # ④
      return mid
    elif guess > item:                      # ⑤
      high = mid - 1
    else:                                   # ⑥
      low = mid + 1
  return None                               # ⑦

my_list = [1, 3, 5, 7, 9]                   # ⑧

print(binary_search(my_list, 3)) # => 1       ⑨
print(binary_search(my_list, -1)) # => None   ⑩

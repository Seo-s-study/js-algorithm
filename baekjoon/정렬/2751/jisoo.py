import sys
input = sys.stdin.readline

n = int(input()) # nę°ė ė
arr = [] 

for i in range(n):
    new=int(input())
    arr.append(new)

arr.sort()

for i in range(n):
    print(arr[i])

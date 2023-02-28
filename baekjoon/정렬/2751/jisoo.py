import sys
input = sys.stdin.readline

n = int(input()) # n개의 수
arr = [] 

for i in range(n):
    new=int(input())
    arr.append(new)

arr.sort()

for i in range(n):
    print(arr[i])

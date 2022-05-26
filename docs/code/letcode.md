---
title: letcode 题解
author: King
date: '2022-5-26'
---

## 空闲之余，偶尔会想到曾经刷题的岁月，这次我把之前刷过的题目整理了一下，以便日后翻阅
> 学海无涯苦作舟，每当回想起来，便也不觉得苦了

### 便利文件映射代码
```js
import {
  readdirSync,
  readFileSync,
  lstatSync,
  writeFileSync
} from 'fs'
import {
  join
} from 'path'



let dirs = readdirSync('.')
dirs = dirs.filter((dir) => (!dir.startsWith('.') && !/(\.md|\.mjs|\.mod|\.go)$/i.test(dir) && lstatSync(dir).isDirectory()))


dirs.sort().forEach(dir => {
  let mainDir = readdirSync(`${dir}`)
  const filePath = join(dir, mainDir[0])
  const fileContext = readFileSync(filePath)
  const ext=filePath.substring(filePath.lastIndexOf('.')+1)

  const writeContext = `### ${dir}\n\n` + `\`\`\`${ext}\n${fileContext.toString()}\`\`\`` + '\n\n'
  writeFileSync('./1.md', writeContext, {
    flag: 'a+'
  })
})
```

### 100. 相同的树

```go
package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSameTree(p *TreeNode, q *TreeNode) bool {
	if p == nil && q == nil {
		return true
	} else if p == nil || q == nil {
		return false
	}

	if p.Val != q.Val {
		return false
	}

	return isSameTree(p.Left, q.Left) && isSameTree(p.Right, q.Right)
}

func main() {

}
```

### 1008. 前序遍历构造二叉搜索树

```go
package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func bstFromPreorder(preorder []int) *TreeNode {

}

func main() {

}
```

### 101. 对称二叉树

```go
package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func isSymmetric(root *TreeNode) bool {
	return isMirror(root,root)
}

func isMirror(t1 *TreeNode,t2 * TreeNode) bool {
	if t1==nil && t2==nil {
		return true
	}
	if t1==nil||t2==nil {
		return false
	}

	return t1.Val==t2.Val && isMirror(t1.Left,t2.Right) && isMirror(t1.Right,t2.Left)
}

func main() {
	t:=&TreeNode{Val:1,Left:&TreeNode{Val:2,Left:&TreeNode{Val:3},Right:&TreeNode{Val:4}},Right:
	&TreeNode{Val:2,Left:&TreeNode{Val:4},Right:&TreeNode{Val:3}}}
	fmt.Println(isSymmetric(t))
}
```

### 102. 二叉树的层序遍历

```go
package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode) (res [][]int) {

	var inOrder func(root *TreeNode)
	inOrder = func(root *TreeNode) {
		if root == nil {
			return
		}
		if root.Left != nil && root.Right != nil {
			res = append(res, []int{root.Left.Val, root.Right.Val})
			inOrder(root.Left)
			inOrder(root.Right)
		} else if root.Left != nil && root.Right == nil {

			res = append(res, []int{root.Left.Val})
			inOrder(root.Left)
		} else if root.Left == nil && root.Right != nil {

			res = append(res, []int{root.Right.Val})
			inOrder(root.Right)
		}
	}
	inOrder(root)
	return
}

func main() {
	node := &TreeNode{Val: 1, Left: nil, Right: &TreeNode{Val: 2, Left: &TreeNode{Val: 3, Left: nil, Right: nil}, Right: nil}}
	fmt.Println(inorderTraversal(node))
}
```

### 104. 二叉树的最大深度

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var maxDepth = function(root) {
  return root?Math.max(maxDepth(root.left),maxDepth(root.right))+1:0
};

```

### 1108. IP 地址无效化

```go
package main

import (
	"fmt"
	"strings"
)

func defangIPaddr(address string) string {
	return strings.Replace(address,".","[.]",-1)
}

func main()  {
	address := "1.1.1.1"
	fmt.Println(defangIPaddr(address))
}
```

### 1122. 数组的相对排序

```go
package main

import (
	"fmt"
	"sort"
)

func relativeSortArray(arr1 []int, arr2 []int) []int {
	var ans []int
	sort.Ints(arr1)
	
	for _, v2 := range arr2 {
		for _, v1 := range arr1 {
			if v1 == v2 {
				ans = append(ans, v1)
			}
		}
	}

	return ans
}

func main() {
	arr1 := []int{2, 3, 1, 3, 2, 4, 6, 7, 9, 2, 19}
	arr2 := []int{2, 1, 4, 3, 9, 6}
	fmt.Println(relativeSortArray(arr1, arr2))
}
```

### 1160. 拼写单词

```go
package main

import "fmt"

func countCharacters(words []string, chars string) int {
	var charMap=make(map[uint8]int)
	var l int

	for i:=0;i<len(chars);i++{
		charMap[chars[i]]++
	}
	
	for i:=0;i<len(words);i++{
		var wordMap=make(map[uint8]int)
		flag:=true
		for j:=0;j<len(words[i]);j++{
			wordMap[words[i][j]]++
		}
		for k,_:=range wordMap{
			if wordMap[k]>charMap[k] {
				flag=false
				continue
			}
		}
		if flag {
			l+=len(words[i])
		}
	}
	return  l
}

func main()  {
	words:=[]string{"hello","world","leetcode"}
	chars:="welldonehoneyr"
	fmt.Println(countCharacters(words,chars))
}
```

### 118. 杨辉三角

```go
package main

import "fmt"

func generate(numRows int) [][]int {
	var ans [][]int
	k := 0
	for i := 0; i < 3; i++ {
		for j := 0; j < 4; j++ {
			k++
			ans[i][j] = k
			fmt.Printf("a[%d][%d]=%d", i, j, ans[i][j])
		}
		fmt.Println("\n")
	}

	return ans

}

func main() {
	fmt.Println(generate(5))
}
```

### 1200. 最小绝对差

```go
package main

import (
	"fmt"
	"sort"
)

func minimumAbsDifference(arr []int) [][]int {
	sort.Ints(arr)
	fmt.Println(arr)
	var aa [][]int

	min := arr[1] - arr[0]
	for i := 0; i < len(arr)-1; i++ {
		if min == arr[i+1]-arr[i] {
			aa = append(aa, []int{arr[i], arr[i+1]})
		} else if min > arr[i+1]-arr[i] {
			min = arr[i+1] - arr[i]
			aa = [][]int{}
			aa = append(aa, []int{arr[i], arr[i+1]})
		}
	}

	return aa
}

func main() {
	aa := []int{40, 11, 26, 27, -20}
	fmt.Println(minimumAbsDifference(aa))
}
```

### 1207. 独一无二的出现次数

```go
package main

import "fmt"

func uniqueOccurrences(arr []int) bool {
	var tmp []int
	for i:=0;i<len(arr);i++{
		tmp[arr[i]]++
	}
	fmt.Println(tmp)
	return  true
}

func main() {
	arr := []int{1, 2, 2, 1, 1, 3}
	fmt.Println(uniqueOccurrences(arr))
}
```

### 121. 买卖股票的最佳时机

```go
package main

import "fmt"

func maxProfit(prices []int) int {
	ans:=0

	l:=len(prices)

	for i:=0;i<l-1;i++{
		for k:=i+1;k<l;k++{
			if prices[k]-prices[i]>ans  {
				ans= prices[k]-prices[i]
			}
		}
	}
	return ans
}

func main()  {
	arr:=[]int{7,6,4,3,1}
	fmt.Println(maxProfit(arr))
}
```

### 1232. 缀点成线

```go
package main

import "fmt"

func checkStraightLine(coordinates [][]int) bool {
	if len(coordinates) == 1 || len(coordinates) == 2 {
		return true
	}
	//斜率
	k := (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0])
	for i := 0; i < len(coordinates)-1; i++ {
		if(coordinates[i+1][0]-coordinates[i][0])==0|| (coordinates[i+1][1]/coordinates[i][1])/(coordinates[i+1][0]-coordinates[i][0]) != k  {
			return false
		}
	}
	return true
}

func main() {
	a := [][]int{{1, 2}, {2, 3}, {3, 4}, {4, 5}}
	fmt.Println(checkStraightLine(a))
}
```

### 1281. 整数的各位积和之差

```go
package main

import (
	"fmt"
	"strconv"
)
func subtractProductAndSum(n int) int {
	strN:=strconv.Itoa(n)
	i:=len(strN)
	ji:=1
	he:=0
	for i>0{
		aa:=n%10
		n/=10
		ji*=aa
		he+=aa
		i--
	}
	return ji-he
}


func main()  {
	fmt.Println(subtractProductAndSum(234))
}
```

### 1287. 有序数组中出现次数超过25%的元素

```go
package main

import (
	"fmt"
)

func findSpecialInteger(arr []int) int {
	var m = make(map[int]int)
	for k, _ := range arr {
		m[arr[k]]++
	}
	max := 0
	index := 0
	for k, v := range m {
		if v > max {
			max, index = v, k
		}
	}
	return index
}

func main() {
	arr := []int{1}
	fmt.Println(findSpecialInteger(arr))
}
```

### 1290. 二进制链表转整数

```go
package main

import "fmt"

type ListNode struct {
    Val int
    Next *ListNode
}

func getDecimalValue(head *ListNode) int {
	num:=0
	for head!=nil{
		num=num<<1+head.Val
		head=head.Next
	}
	return num

}


func main()  {
	ln:=&ListNode{Val:1,Next:&ListNode{Val:0,Next:&ListNode{Val:1,Next:nil}}}


	fmt.Println(getDecimalValue(ln))

}
```

### 1295. 统计位数为偶数的数字

```go
package main

import (
	"fmt"
	"strconv"
)

func findNumbers(nums []int) int {
	i := 0
	for _, v := range nums {
		if len(strconv.Itoa(v))%2 == 0 {
			i++
		}
	}
	return i
}

func main() {
	nums := []int{12, 345, 2, 6, 7896}
	fmt.Println(findNumbers(nums))
}
```

### 1313. 解压缩编码列表

```go
package main

import "fmt"

func decompressRLElist(nums []int) []int {
	var ans []int
	for i := 0; i < len(nums); i += 2 {
		for k := 0; k < nums[i]; k++ {
			ans = append(ans, nums[i+1])
		}
	}
	return ans
}

func main() {
	nums := []int{1, 2, 3, 4}
	fmt.Println(decompressRLElist(nums))
}
```

### 1325. 删除给定值的叶子节点

```go
package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func removeLeafNodes(root *TreeNode, target int) *TreeNode {

	if root == nil {
		return nil
	}

	root.Left = removeLeafNodes(root.Left, target)
	root.Right = removeLeafNodes(root.Right, target)

	if root.Left == nil && root.Right == nil && root.Val == target {
		return nil
	}

	return root
}

func main() {
	node := &TreeNode{Val: 1, Left: &TreeNode{Val: 2, Left: nil, Right: nil}, Right: &TreeNode{Left: nil, Right: nil}}
	fmt.Println(removeLeafNodes(node, 1))
}
```

### 1342. 将数字变成 0 的操作次数

```go
package main

import "fmt"

func numberOfSteps(num int) int {
	step:=0
	for num>0{
		if num%2==0{
			num/=2
		}else{
			num-=1
		}
		step++
	}
	return  step
}

func main() {
	num := 123
	fmt.Println(numberOfSteps(num))
}
```

### 136. 只出现一次的数字

```go
package main

import "fmt"

func singleNumber(nums []int) int {
	var i = nums[0]
	for k := 1; k < len(nums); k++ {
		i = i ^ nums[k]
	}
	return i
}

func main() {
	arr := []int{2, 2, 1}
	fmt.Println(singleNumber(arr))
}
```

### 1365. 有多少小于当前数字的数字

```go
package main

import "fmt"

func smallerNumbersThanCurrent(nums []int) []int {
	ans := []int{}

	for _, v1 := range nums {
		var tmp int
		for _, v2 := range nums {
			if v1 > v2 {
				tmp++
			}
		}
		ans = append(ans, tmp)
	}
	return ans
}

func main() {
	nums := []int{8, 1, 2, 2, 3}
	fmt.Println(smallerNumbersThanCurrent(nums))
}
```

### 137. 只出现一次的数字 II

```js
/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let res=0
  for(let i=0;i<32;i++){
    let sum=0
    for(let num of nums){
      sum+=(num>>i) & 1
    }
    res ^=(sum%3)<<i
  }
};

let nums = [2,2,3,2]
addBinary(nums,3)```

### 145. 二叉树的后序遍历

```go
package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func postorderTraversal(root *TreeNode) (res []int) {
	var f func(root *TreeNode)

	f = func(root *TreeNode) {
		if root == nil {
			return
		}

		f(root.Left)
		f(root.Right)
		res = append(res, root.Val)
	}

	f(root)
	return
}

func main() {

}
```

### 1470. 重新排列数组

```go
package main

import "fmt"

func shuffle(nums []int, n int) []int {
	var a []int
	var b []int

	for i := 0; i < len(nums); i++ {
		if i < n {
			a = append(a, nums[i])
		} else {
			b = append(b, nums[i])
		}
	}

	var c []int

	for i := 0; i < len(a); i++ {
		c = append(c, a[i])
		c = append(c, b[i])
	}

	return c
}

func main() {
	nums := []int{2, 5, 1, 3, 4, 7}
	n := 3

	fmt.Println(shuffle(nums, n))
}
```

### 1480. 一维数组的动态和

```go
package main

import "fmt"

func runningSum(nums []int) []int {
	var tmp int
	var tmpArr []int

	for _, v := range nums {
		tmp += v
		tmpArr = append(tmpArr, tmp)
	}

	return tmpArr
}

func main() {
	nums := []int{1, 2, 3, 4}
	fmt.Println(runningSum(nums))
}
```

### 1486. 数组异或操作

```go
package main

import "fmt"

func xorOperation(n int, start int) int {
	ans := 0
	i := 0
	for n > 0 {
		ans = ans ^ (start + 2*i)
		i = i + 1
		n = n - 1
	}
	return ans
}

func main() {
	fmt.Println(xorOperation(5, 0))
}
```

### 151. 翻转字符串里的单词

```go
package main

import (
	"fmt"
	"strings"
)

func reverseWords(s string) string {
	trimStr:=strings.TrimSpace(s)
	trimArr:=strings.Split(trimStr," ")
	var ansArr []string
	for i:=len(trimArr)-1;i>=0;i--{
		if strings.Trim(trimArr[i]," ")=="" {
			continue
		}
		ansArr=append(ansArr,trimArr[i])
	}
	return strings.Join(ansArr," ")
}

func main()  {
	s:="a good   example"
	fmt.Println(reverseWords(s))
}
```

### 1512. 好数对的数目

```go
package main

import "fmt"

func numIdenticalPairs(nums []int) int {
	var ansArr [][]int
	for k1, _ := range nums {
		for k2, _ := range nums {
			if nums[k1] == nums[k2] && k1 < k2 {
				ansArr = append(ansArr, []int{k1, k2})
			}
		}
	}
	return len(ansArr)
}

func main() {
	nums := []int{1, 1, 1, 1}
	fmt.Println(numIdenticalPairs(nums))
}
```

### 1528. 重新排列字符串

```go
package main

import (
	"fmt"
)

func restoreString(s string, indices []int) string {
	ss := make([]rune, len(indices))
	for k, v := range s {
		ss[indices[k]] = v
	}
	return string(ss)
}

func main() {
	s := "codeleet"
	indices := []int{4, 5, 6, 7, 0, 2, 1, 3}
	fmt.Println(restoreString(s, indices))
}
```

### 1534. 统计好三元组

```js
/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {number}
 */
var countGoodTriplets = function (arr, a, b, c) {
  let len = arr.length
  let count = 0
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      for (let k = j + 1; k < len; k++) {
        if (
          Math.abs(arr[i] - arr[j]) <= a &&
          Math.abs(arr[j] - arr[k]) <= b &&
          Math.abs(arr[i] - arr[k]) <= c
        ) {
          ++count
        }
      }
    }
  }
  return count
}

const arr = [3, 0, 1, 1, 9, 7],
  a = 7,
  b = 2,
  c = 3

console.log(countGoodTriplets(arr, a, b, c))
```

### 155. 最小栈

```js
var MinStack = function() {
  this.arr=[]
  this.minArr=[]
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
  this.arr.push(val)
  this.minArr.push(Math.min(val,this.getMin()??Infinity))
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  this.arr.pop()
  this.minArr.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.arr[this.arr.length-1]
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
  return this.minArr[this.minArr.length-1]
};


 var obj = new MinStack()
 obj.push(val)
 obj.pop()
 var param_3 = obj.top()
 var param_4 = obj.getMin()```

### 1603. 设计停车系统

```go
package main

import "fmt"

type ParkingSystem struct {
	car map[int]int
}

func Constructor(big int, medium int, small int) ParkingSystem {
	return ParkingSystem{car: map[int]int{1: big, 2: medium, 3: small}}
}

func (this *ParkingSystem) AddCar(carType int) bool {
	this.car[carType] = this.car[carType] - 1

	if this.car[carType] < 0 {
		return false
	}
	return true
}

func main() {
	big := 1
	medium := 1
	small := 0

	obj := Constructor(big, medium, small)
	fmt.Println(obj.AddCar(1))
	fmt.Println(obj.AddCar(2))
	fmt.Println(obj.AddCar(3))
	fmt.Println(obj.AddCar(1))
}
```

### 1630. 等差子数组

```go
package main

import (
	"fmt"
	"sort"
)

func checkArithmeticSubarrays(nums []int, l []int, r []int) []bool {
	var ans []bool

	for i := 0; i < len(l); i++ {
		var tmpArr []int

		for g := l[i]; g <= r[i]; g++ {
			tmpArr = append(tmpArr, nums[g])
		}
		tempBool := true
		sort.Ints(tmpArr)
		fmt.Println(tmpArr)
		for k := 0; k < len(tmpArr)-1; k++ {
			tmp := tmpArr[1] - tmpArr[0]
			if tmpArr[k+1]-tmpArr[k] != tmp {
				//fmt.Println(tmpArr)
				//fmt.Println(k)
				tempBool = false
			}
		}

		ans = append(ans, tempBool)
	}

	return ans
}

func main() {
	nums := []int{4, 6, 5, 9, 3, 7}
	l := []int{0, 0, 2}
	r := []int{2, 3, 5}

	fmt.Println(checkArithmeticSubarrays(nums, l, r))
}
```

### 1636. 按照频率将数组升序排序

```go
package main

import (
	"fmt"
	"sort"
)

func frequencySort(nums []int) []int {
	var tmp map[int]int
	tmp = make(map[int]int)
	for _, v := range nums {
		tmp[v]++
	}

	fmt.Println(tmp)

	sort.Slice()
	return nums

}

func main() {
	nums := []int{1, 1, 2, 2, 2, 3}

	frequencySort(nums)
}
```

### 1672. 最富有客户的资产总量

```go
package main

import "fmt"

func maximumWealth(accounts [][]int) int {
	max := 0
	for _, v1 := range accounts {
		tmp := 0
		for _, v2 := range v1 {
			tmp += v2
		}
		if max < tmp {
			max = tmp
		}
	}

	return max
}

func main() {
	accounts := [][]int{{1, 5}, {7, 3}, {3, 5}}
	fmt.Println(maximumWealth(accounts))
}
```

### 1678. 设计 Goal 解析器

```go
package main

import (
	"fmt"
	"strings"
)

func interpret(command string) string {
	command = strings.ReplaceAll(command, "G", "G")
	command = strings.ReplaceAll(command, "()", "o")
	command = strings.ReplaceAll(command, "(al)", "al")
	return command

}

func main() {
	fmt.Println(interpret("G()()()()(al)"))
}
```

### 1684. 统计一致字符串的数目

```go
package main

import (
	"fmt"
	"strings"
)

func countConsistentStrings(allowed string, words []string) int {
	ans := 0
	for _, v := range words {
		for k, char := range v {
			if !strings.Contains(allowed, string(char)) {
				break
			}

			if k == len(v)-1 {
				ans = ans + 1
			}
		}
	}
	return ans
}

func main() {
	allowed := "abc"
	words := []string{"a", "b", "c", "ab", "ac", "bc", "abc"}
	fmt.Println(countConsistentStrings(allowed, words))
}
```

### 1748. 唯一元素的和

```go
package main

import "fmt"

func sumOfUnique(nums []int) int {
	mp := map[int]int{}
	for _, v := range nums {
		mp[v] = mp[v] + 1
	}
	ans := 0
	for k, v := range mp {
		if v == 1 {
			ans = ans + k
		}
	}

	return ans
}

func main() {
	nums := []int{1, 1, 1, 1, 1}
	fmt.Println(sumOfUnique(nums))
}
```

### 191. 位1的个数

```go
package main

import "fmt"

func main()  {
	var a uint32=00000000000000000000000000001011
	fmt.Println(uint32(a))
}
```

### 20. 有效的括号

```go
package main

import "fmt"

func isValid(s string) bool {
	l := len(s)
	if l == 1 {
		return false
	}
	for i := 0; i < l; i += 2 {
		switch string(s[i]) {
		case "(":
			if string(s[i+1]) != ")" && string(s[l-i-1]) != ")" {
				return false
			}
		case "{":
			if string(s[i+1]) != "}" && string(s[l-i-1]) != "}" {
				return false
			}
		case "[":
			if string(s[i+1]) != "]" && string(s[l-i]-1) != "]" {
				return false
			}
		}
	}

	return true
}

func main() {
	s := "{[]}"
	fmt.Println(isValid(s))
}
```

### 202. 快乐数

```go
package main

import (
	"fmt"
	"strconv"
)

func isHappy(n int) bool {

	temp:=[]int{}

	for  {
		tt:=strconv.Itoa(n)
		ttt:=0
		for i := 0; i < len(tt); i++ {
			t, _ := strconv.Atoi(string(tt[i]))
			ttt += t * t
		}
		n=ttt


		if n == 1 {
			return true
		}

		for t:=0;t<len(temp);t++ {
			if n==temp[t] {
				return false
			}
		}
		temp=append(temp,n)

	}
}

func main() {
	fmt.Println(isHappy(19))
}
```

### 205. 同构字符串

```go
package main

import (
	"fmt"
	"strings"
)

func isIsomorphic(s string, t string) bool {
	for k, v := range s {
		if strings.Index(s, string(v)) != strings.Index(t, string(t[k])) {
			return false
		}
	}
	return true
}

func main() {
	s := "foo"
	t := "bar"
	fmt.Println(isIsomorphic(s, t))
}
```

### 206. 反转链表

```go
package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func reverseList(head *ListNode) *ListNode {
	var newHead, next *ListNode

	for head!=nil{
		next=head.Next
		head.Next=newHead
		newHead=head
		head=next
	}
	return newHead
}

func main() {

}
```

### 21. 合并两个有序链表

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var mergeTwoLists = function(l1, l2) {
  if(l1==null){
    return  l2
  }else if(l2==null){
    return l1
  }else if(l1.val<l2.val){
    l1.next=mergeTwoLists(l1.next,l2)
    return l1
  }else{
    l2.next=mergeTwoLists(l1,l2.next)
    return l2
  }
};```

### 217. 存在重复元素

```go
package main

import (
	"fmt"
	"sort"
)

func containsDuplicate(nums []int) bool {
	sort.Ints(nums)
	if len(nums)==1 {
		return false
	}
	for i:=0;i<len(nums)-1;i++{
		if nums[i]==nums[i+1] {
			return true
		}
	}
	return false
}

func main() {
	arr := []int{1,1,1,3,3,4,3,2,4,2}
	fmt.Println(containsDuplicate(arr))
}
```

### 219. 存在重复元素 II

```go
package main

import (
	"fmt"
	"math"
	"strconv"
)

//超时
func containsNearbyDuplicate1(nums []int, k int) bool {
	for i := 0; i < len(nums); i++ {
		for j := i+1; j <= len(nums)-1; j++ {
			if nums[i] == nums[j] && int(math.Abs(float64(i-j))) <= k {
				return true
			}
		}
	}
	return false
}

func containsNearbyDuplicate(nums []int, k int) bool {
	strMap:=make(map[string]int)
	for i:=0;i<len(nums);i++{
		strMap[strconv.Itoa(nums[i])]++
		if strMap[strconv.Itoa(nums[i])]>=2 {
			for j:=0;j<i;j++{
				if nums[i]==nums[j] {
					if i-j<=k {
						return true
					}
				}
			}
		}
	}
	return false
}

func main() {
	nums := []int{1,0,1,1}
	k := 1
	fmt.Println(containsNearbyDuplicate(nums, k))
}
```

### 222. 完全二叉树的节点个数

```go
package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func countNodes(root *TreeNode) int {
	var res int
	var fn func(root *TreeNode)
	if root == nil {
		return 0
	}
	fn = func(root *TreeNode) {
		if root != nil {
			res++
		}
		if root.Left != nil {
			fn(root.Left)
		}
		if root.Right != nil {
			fn(root.Right)
		}
	}

	fn(root)

	return res
}

func main() {
	fmt.Println(countNodes(&TreeNode{Val: 1, Left: nil, Right: nil}))
}
```

### 226. 翻转二叉树

```go
package main

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func invertTree(root *TreeNode) *TreeNode {
	if root == nil {
		return nil
	}

	right := invertTree(root.Right)
	left := invertTree(root.Left)
	root.Left, root.Right = right, left
	return root
}

func main() {

}
```

### 230. 二叉搜索树中第K小的元素

```go
package main

import (
	"fmt"
)

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func kthSmallest(root *TreeNode, k int) int {
	arr := []int{}
	find(root, &arr)
	return arr[k-1]

}

func find(root *TreeNode, arr *[]int) {
	if root == nil {
		return
	}

	find(root.Left, arr)
	*arr = append(*arr, root.Val)
	find(root.Right, arr)
	return
}

func main() {
	root := &TreeNode{Val: 3, Left: &TreeNode{Val: 1, Left: nil, Right: &TreeNode{Val: 2, Left: nil, Right: nil}}, Right: &TreeNode{Val: 4, Left: nil, Right: nil}}
	fmt.Println(kthSmallest(root, 1))
}
```

### 232. 用栈实现队列

```go
package main
//
//type MyQueue struct {
//	stackPush []int
//	stackPop []int
//}
//
//
///** Initialize your data structure here. */
//func Constructor() MyQueue {
//	return MyQueue{}
//}
//
//
///** Push element x to the back of queue. */
//func (this *MyQueue) Push(x int)  {
//	this.stackPush=append(this.stackPush,x)
//	if len(this.stackPop)<=0{
//		for _,val:=range this.stackPush{
//			this.stackPop=append(this.stackPop,val)
//		}
//		this.stackPush=nil
//	}
//}
//
//
///** Removes the element from in front of queue and returns that element. */
//func (this *MyQueue) Pop() int {
//	if (len(this.stackPop)<=0&&len(this.stackPush)<=0)){
//		return 0
//	}
//
//}
//
//
///** Get the front element. */
//func (this *MyQueue) Peek() int {
//
//}
//
//
///** Returns whether the queue is empty. */
//func (this *MyQueue) Empty() bool {
//
//}
//
//
///**
// * Your MyQueue object will be instantiated and called as such:
// * obj := Constructor();
// * obj.Push(x);
// * param_2 := obj.Pop();
// * param_3 := obj.Peek();
// * param_4 := obj.Empty();
// */
//
//func main()  {
//
//}
```

### 237. 删除链表中的节点

```go
package main

import "fmt"

type ListNode struct {
	Val int
	Next *ListNode
}

func deleteNode(node *ListNode) {
	node.Val=node.Next.Val
	node.Next=node.Next.Next
}

func main()  {
	node:=&ListNode{Val:1,Next:&ListNode{Val:0,Next:&ListNode{Val:1,Next:nil}}}
	for node!=nil{
		fmt.Println(node.Val)
		node=node.Next
	}
}
```

### 242. 有效的字母异位词

```go
package main

import (
	"fmt"
	"sort"
)

func isAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}
	s1 := []byte(s)
	t1 := []byte(t)

	sort.Slice(s1, func(i, j int) bool {
		return s1[i] <s1[j]
	})

	sort.Slice(t1, func(i, j int) bool {
		return t1[i] < t1[j]
	})

	for k,v:=range s1{
		if v!=t1[k]{
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(isAnagram("anagram", "nagaram"))
}
```

### 258. 各位相加

```go
package main

import (
	"fmt"
	"strconv"
)

func addDigits(num int) int {
	if len(strconv.Itoa(num)) == 1 {
		return num
	}
	k := 0
	for num > 0 {
		k += num % 10
		num /= 10
	}
	return addDigits(k)
}

func main() {
	fmt.Println(addDigits(38))
}
```

### 260. 只出现一次的数字 III

```go
package main

import "fmt"

func singleNumber(nums []int) []int {
	m := make(map[int]int)
	for _, v := range nums {
		m[v]++
	}

	var tmp []int
	for k, v := range m {
		if v == 1 {
			tmp = append(tmp, k)
		}
	}

	return tmp
}

func main() {
	nums := []int{1, 2, 1, 3, 2, 5}
	fmt.Println(singleNumber(nums))
}
```

### 268. 缺失数字

```go
package main

import (
	"fmt"
	"sort"
)

func missingNumber(nums []int) int {
	if len(nums)==1{
		if nums[0]==0{
			return 1
		}else{
			return 0
		}
	}

	sort.Ints(nums)
	start := nums[0]
	for i := 0; i < len(nums); i++ {
		if start == nums[i] {
			start++
			continue
		} else {
			return nums[i] -1
		}
	}

	if nums[0]>0{
		return 0
	}
	return nums[len(nums)-1]+1
}

func main() {
	a := []int{1,2}
	fmt.Println(missingNumber(a))
}
```

### 27. 移除元素

```go
package main

import "fmt"

func removeElement(nums []int, val int) int {
	index:=0
	for ;index<len(nums);{
		if nums[index]==val {
			nums=append(nums[:index],nums[index+1:]...)
			continue
		}
		index++
	}
	return len(nums)
}

func main()  {
	nums:=[]int{3,2,2,3}
	val:=3
	fmt.Println(removeElement(nums,val))
}
```

### 283. 移动零

```go
package main

import "fmt"

func moveZeroes(nums []int)  {

	next:=0
	l:=len(nums)
	for i:=0;i<l;i++{
		if nums[i]!=0 {
			nums[next]=nums[i]
			next++
		}
	}
	for next<l{
		nums[next]=0
		next++
	}
	return
}

func main()  {
	nums:=[]int{0,1,0,3,12}

	moveZeroes(nums)

	fmt.Println(nums)
}
```

### 292. Nim 游戏

```go
package main

func canWinNim(n int) bool {
	return n % 4 != 0
}

func main() {

}
```

### 326. 3的幂

```go
package main

import "fmt"

func isPowerOfTwo(n int) bool {
	if n==0{
		return false
	}
	for n%4 == 0 {
		n /= 4
	}
	return n == 1
}

func main() {
	fmt.Println(isPowerOfTwo(5))
}
```

### 344. 反转字符串

```go
package main

import (
	"fmt"
)

func reverseString(s []byte)  {
	for i:=0;i<(len(s))/2;i++ {
		tmp:=s[i]
		s[i]=s[len(s)-1-i]
		s[len(s)-i-1]=tmp

	}
}

func main()  {
	arr:=[]byte{'h','e','l','l','o'}
	reverseString(arr)

	fmt.Println((string(arr)))
}
```

### 349. 两个数组的交集

```go
package main

import "fmt"

func intersection(nums1 []int, nums2 []int) []int {
	return  nums1 & nums2
}

func main()  {
	nums1:=[]int{1,2,2,1}
	nums2:=[]int{2,2}
	fmt.Println(intersection(nums1,nums2))
}
```

### 35.搜索插入位置（二分法）

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  let max = nums.length - 1
  let min = 0

  while (min <= max) {
    let mid = Math.floor((max + min) / 2)
    if (target == nums[mid]) {
      return mid
    } else if (target < nums[mid]) {
      max = mid - 1
    } else {
      min = mid + 1
    }
  }



  nums.splice(nums.length - 1, 0, target)
  console.log(nums.sort())
  return nums.sort((a,b)=>a-b).findIndex((element) => {
    return element === target
  });
};

const nums = [3,5,7,9,10]
const target = 8


console.log(searchInsert(nums, target))```

### 350. 两个数组的交集 II

```go
package main

import (
	"fmt"
	"sort"
)

func intersect(nums1 []int, nums2 []int) []int {
	sort.Ints(nums1)
	sort.Ints(nums2)
	var ans []int
	i := 0
	k := 0
	for i <len(nums1) && k < len(nums2) {
		if nums1[i] > nums2[k] {
			k++
		} else if nums1[i] < nums2[k] {
			i++
		} else {
			ans = append(ans, nums1[i])
			i++
			k++
		}
	}
	return ans
}

func main() {
	nums1 := []int{1, 2, 2, 1}
	nums2 := []int{2, 2}
	fmt.Println(intersect(nums1, nums2))
}
```

### 367. 有效的完全平方数

```js
/**
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
  if(num<2){
    return true
  }

  let left=2
  let right=num/2
  
  while(left<=right){
    let mid=Math.floor((left+right)/2)
    if(mid**2===num){
      return true
    }else if(mid**2>num){
      right=mid-1
    }else{
      left=mid+1
    }
  }

  return  false
};


console.log(isPerfectSquare(16))```

### 371. 两整数之和

```go
package main

import "fmt"

func getSum(a int, b int) int {
return
}

func main()  {
	a:=1
	b:=2
	fmt.Println(getSum(a,b))
}
```

### 374. 猜数字大小

```go
package main

func guessNumber(n int) int {
	i:=1
	j:=n
	for i<=j{
		t:=i+(j-i)/2
		if guess(t)==0 {
			return t
		}
		if guess(t)==1 {
			i=t+1
		}else{
			j=t-1
		}
	}
	return -1
}

func main()  {

}
```

### 387. 字符串中的第一个唯一字符

```js
/**
 * @param {string} s
 * @return {number}
 */
 var firstUniqChar = function(s) {
  const m =new Map()

  for(const [k,v] of Array.from(s).entries()){
    let tmp=m.get(v)|| 0
    m.set(v,++tmp)
  }

  for(const [k,v] of m){
    if(v==1) return s.indexOf(k)
  }

  return -1
};


let s = "leetcode"

console.log(firstUniqChar(s))```

### 389. 找不同

```go
package main

import (
	"fmt"
)

func findTheDifference(s string, t string) byte {
	ssum, tsum := 0, 0
	for _, x := range s {
		ssum += int(x)
	}
	for _, x := range t {
		tsum += int(x)
	}
	return byte(tsum - ssum)
}

func main() {

	fmt.Println(string(findTheDifference("ymbgaraibkfmvocpizdydugvalagaivdbfsfbepeyccqfepzvtpyxtbadkhmwmoswrcxnargtlswqemafandgkmydtimuzvjwxvlfwlhvkrgcsithaqlcvrihrwqkpjdhgfgreqoxzfvhjzojhghfwbvpfzectwwhexthbsndovxejsntmjihchaotbgcysfdaojkjldprwyrnischrgmtvjcorypvopfmegizfkvudubnejzfqffvgdoxohuinkyygbdzmshvyqyhsozwvlhevfepdvafgkqpkmcsikfyxczcovrmwqxxbnhfzcjjcpgzjjfateajnnvlbwhyppdleahgaypxidkpwmfqwqyofwdqgxhjaxvyrzupfwesmxbjszolgwqvfiozofncbohduqgiswuiyddmwlwubetyaummenkdfptjczxemryuotrrymrfdxtrebpbjtpnuhsbnovhectpjhfhahbqrfbyxggobsweefcwxpqsspyssrmdhuelkkvyjxswjwofngpwfxvknkjviiavorwyfzlnktmfwxkvwkrwdcxjfzikdyswsuxegmhtnxjraqrdchaauazfhtklxsksbhwgjphgbasfnlwqwukprgvihntsyymdrfovaszjywuqygpvjtvlsvvqbvzsmgweiayhlubnbsitvfxawhfmfiatxvqrcwjshvovxknnxnyyfexqycrlyksderlqarqhkxyaqwlwoqcribumrqjtelhwdvaiysgjlvksrfvjlcaiwrirtkkxbwgicyhvakxgdjwnwmubkiazdjkfmotglclqndqjxethoutvjchjbkoasnnfbgrnycucfpeovruguzumgmgddqwjgdvaujhyqsqtoexmnfuluaqbxoofvotvfoiexbnprrxptchmlctzgqtkivsilwgwgvpidpvasurraqfkcmxhdapjrlrnkbklwkrvoaziznlpor", "qhxepbshlrhoecdaodgpousbzfcqjxulatciapuftffahhlmxbufgjuxstfjvljybfxnenlacmjqoymvamphpxnolwijwcecgwbcjhgdybfffwoygikvoecdggplfohemfypxfsvdrseyhmvkoovxhdvoavsqqbrsqrkqhbtmgwaurgisloqjixfwfvwtszcxwktkwesaxsmhsvlitegrlzkvfqoiiwxbzskzoewbkxtphapavbyvhzvgrrfriddnsrftfowhdanvhjvurhljmpxvpddxmzfgwwpkjrfgqptrmumoemhfpojnxzwlrxkcafvbhlwrapubhveattfifsmiounhqusvhywnxhwrgamgnesxmzliyzisqrwvkiyderyotxhwspqrrkeczjysfujvovsfcfouykcqyjoobfdgnlswfzjmyucaxuaslzwfnetekymrwbvponiaojdqnbmboldvvitamntwnyaeppjaohwkrisrlrgwcjqqgxeqerjrbapfzurcwxhcwzugcgnirkkrxdthtbmdqgvqxilllrsbwjhwqszrjtzyetwubdrlyakzxcveufvhqugyawvkivwonvmrgnchkzdysngqdibhkyboyftxcvvjoggecjsajbuqkjjxfvynrjsnvtfvgpgveycxidhhfauvjovmnbqgoxsafknluyimkczykwdgvqwlvvgdmufxdypwnajkncoynqticfetcdafvtqszuwfmrdggifokwmkgzuxnhncmnsstffqpqbplypapctctfhqpihavligbrutxmmygiyaklqtakdidvnvrjfteazeqmbgklrgrorudayokxptswwkcircwuhcavhdparjfkjypkyxhbgwxbkvpvrtzjaetahmxevmkhdfyidhrdeejapfbafwmdqjqszwnwzgclitdhlnkaiyldwkwwzvhyorgbysyjbxsspnjdewjxbhpsvj")))
}
```

### 434. 字符串中的单词数

```go
package main

import (
	"fmt"
	"strings"
)

func countSegments(s string) int {
	n := 0
	if strings.Count(s, " ") == len(s) {
		return 0
	}
	for k, _ := range s {
		if k == 0 && string(s[k]) == " " && string(s[k+1]) != " " {
			n++
		} else if k == 0 && string(s[k]) == " " && string(s[k+1]) == " " {
			continue
		} else if k == 0 || string(s[k-1]) == " " && string(s[k]) != " " {
			n++
		}
	}
	return n
}

func main() {
	str := "Hello, my name is John"
	fmt.Println(countSegments(str))
}
```

### 468. 验证IP地址

```go
package main

import (
	"fmt"
	"regexp"
)

func validIPAddress(IP string) string {
	matchString, _ := regexp.MatchString("[1-9][0-9]{3}.[1-9][0-9]{3}.[1-9][0-9]{3}.[1-9][0-9]{3}", IP)
	fmt.Println(matchString)

	return "IPv4"
}

func main() {
	IP := "172.16.254.1"
	fmt.Println(validIPAddress(IP))
}
```

### 496. 下一个更大元素 I

```go
package main

import (
	"fmt"
)

func nextGreaterElement(nums1 []int, nums2 []int) []int {
	var ans []int
	for _, v := range nums1 {
		flag := 0
		for i := 0; i < len(nums2); i++ {
			if nums2[i]==v{
				for k:=i;k<len(nums2);k++{
					if nums2[k] > v {
						ans = append(ans, nums2[k])
						flag = 1
						break
					}
				}
			}

		}

		if flag == 0 {
			ans = append(ans, -1)
		}
	}
	return ans
}

func main() {
	nums1 := []int{2,4}
	nums2 := []int{1,2,3,4}
	fmt.Println(nextGreaterElement(nums1, nums2))
}
```

### 500. 键盘行

```go
package main

import (
	"fmt"
	"strings"
)

func findWords(words []string) []string {
	firstRow := "qwertyuiopQWERTYUIOP"
	secondRow := "asdfghjklASDFGHJKL"
	thirdRow := "zxcvbnmZXCVBNMZ"
	var answer []string

	for _, v := range words {
		line := firstRow
		flag := true
		if strings.Contains(secondRow, string(v[0])) {
			line = secondRow
		} else if strings.Contains(thirdRow, string(v[0])) {
			line = thirdRow
		}
		for _, c := range v {
			if !strings.Contains(line, string(c)) {
				flag = false
				break
			}
		}
		if flag {
			answer = append(answer, v)
		}
	}
	return answer
}

func main() {
	words := []string{"Hello", "Alaska", "Dad", "Peace"}


	fmt.Println(findWords(words))

}
```

### 509. 斐波那契数

```go
package main

import "fmt"

func fib(N int) int {
	if N == 0 {
		return 0
	}
	if N == 1 {
		return 1
	}
	return fib(N-1) + fib(N-2)
}

func main() {
	fmt.Println(fib(3))
}
```

### 541. 反转字符串 II

```go
package main

import (
	"fmt"
)

func reverseStr(s string, k int) string {
	var tmp string
	sLeft := s[:k]
	fmt.Println(sLeft)
	for i := k-1; i >= 0; i-- {
		tmp += string(sLeft[i])
	}
	sRight := s[k:]
	return tmp + sRight
}
func main() {
	s := "abcdefg"
	k := 2
	fmt.Println(reverseStr(s, k))
}
```

### 551. 学生出勤记录 I

```go
package main

import "fmt"

func checkRecord(s string) bool {
	a:=0
	b:=0
	for _,v:=range s{
		if string(v)=="A"{
			a++
			if a>1 {
				return false
			}
		}
		if string(v)=="L" {
			b++
			if b>2{
				return false
			}
		}else {
			b=0
		}
	}
	return  true
}

func main()  {
	s:="LALL"
	fmt.Println(checkRecord(s))
}
```

### 5685. 交替合并字符串

```go
package main

import "fmt"

func mergeAlternately(word1 string, word2 string) string {
	var s string
	for k, v := range word1 {
		if k == len(word2) {
			break
		}
		s = s + string(v)
		s = s + string(word2[k])
	}

	if len(word2) > len(word1) {
		s = s + word2[len(word1):]
	}

	if len(word2) < len(word1) {
		s = s + word1[len(word2):]
	}
	return s
}

func main() {
	word1 := "abcd"
	word2 := "pq"
	fmt.Println(mergeAlternately(word1, word2))
}
```

### 572. 另一棵树的子树

```js
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
 var isSubtree = function(root, subRoot) {
  if(!root){
    return false
  }

  return check(root,subRoot) || isSubtree(root.left,subRoot) || isSubtree(root.right,subRoot)
};


function check(a,b){
  if(!a && !b){
    return true
  }

  if(!a || !b){
    return  false
  }

  if(a.val===b.val){
    return check(a.left,b.left) && check(a.right,b.right)
  }

  return  false

}```

### 648. 单词替换

```go
package main

import (
	"fmt"
	"strings"
)

func replaceWords(dict []string, sentence string) string {
	sentenceArr:=strings.Split(sentence," ")
	for k,v:=range sentenceArr{ //"aadsfasf absbs bbab cadsfafs"
		for d1,v1:=range dict{  //["a","b","c"]
			if strings.Index(v,v1)==0 {
				sentenceArr[k]=dict[d1]
				break
			}
		}
	}
	return  strings.Join(sentenceArr," ")
}

func main()  {
	dict:=[]string{"a", "b", "c"}
	scnetence:="aadsfasf absbs bbab cadsfafs"
	fmt.Println(replaceWords(dict,scnetence))
}
```

### 66. 加一

```go
package main

import (
	"fmt"
)

func plusOne(digits []int) []int {
	for i:=len(digits)-1;i>=0;i--{
		if digits[i]<9 {
			digits[i]++
			return digits
		}
		digits[i]=0
	}
	nums:=make([]int,len(digits)+1)
	nums[0]=1
	return nums
}

func main() {
	digits := []int{4, 3, 2, 1}
	fmt.Println(plusOne(digits))
}
```

### 67. 二进制求和

```js
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
 var addBinary = function(a, b) {
  a='0b'+a
  b='0b'+b
  return (BigInt(a)+BigInt(b)).toString(2)
};


let a = "11", b = "1"


console.log(addBinary(a,b))```

### 677. 键值映射

```go
package main

import (
	"fmt"
	"strings"
)

type MapSum struct {
	m map[string]int
}


/** Initialize your data structure here. */
func Constructor() MapSum {
	return MapSum{
		m: map[string]int{},
	}
}


func (this *MapSum) Insert(key string, val int)  {
	this.m[key]=val
}


func (this *MapSum) Sum(prefix string) int {
	s:=0
	for k,v:=range this.m{
		if strings.HasPrefix(k,prefix) {
			s+=v
		}
	}
	return s
}

func main()  {
	key:="apple"
	val:=3
	obj := Constructor();
	obj.Insert(key,val);
	obj.Insert("app",2);
	param_2 := obj.Sum("app");
	fmt.Println(param_2)
}

```

### 69. x 的平方根

```go
package main

import (
	"fmt"
"math"
)

func mySqrt(x int) int {
	return int(math.Sqrt(float64(x)))
}

func main() {
	fmt.Println(mySqrt(8))
}
```

### 692. 前K个高频单词

```go
package main

import (
	"fmt"
	"sort"
)

func topKFrequent(words []string, k int) []string {
	indexMap:=make(map[string]int,len(words))
	for _,word:=range words{
		indexMap[word]++
	}

	sortMap(indexMap,k)
	fmt.Println(indexMap)
	return []string{}
}

func sortMap(m map[string]int,k int)  {
	karr:=make([]int,0)
	sarr:=make([]string,0)
	for k,v:=range m{
		karr=append(karr,v)
		sarr=append(sarr,k)
	}
	sort.Ints(karr)
	//karr=karr[len(karr)-k:]
	sort.Strings(sarr)

	fmt.Println(karr)
	fmt.Println(sarr)
}

func main() {
	words := []string{"i", "love", "leetcode", "i", "love", "coding"}
	k := 2

	fmt.Println(topKFrequent(words, k))
}
```

### 693. 交替位二进制数

```go
package main

import (
	"fmt"
	"strconv"
	"strings"
)

func hasAlternatingBits(n int) bool {

	str:=""
	for n>0{
		str+=strconv.Itoa(n%2)
		n/=2
	}
	return ! (strings.Contains(str,"00") || strings.Contains(str,"11"))
}

func main()  {
	n:=10
	fmt.Println(hasAlternatingBits(n))
}
```

### 7. 整数反转

```go
package main

import (
	"fmt"
	"math"
	"strconv"
)

func reverse(x int) int {
	if x >= math.MaxInt32 || x < (-math.MaxInt32) {
		return 0
	}
	var ans string
	if x >= 0 {
		for x != 0 {
			tmp := x % 10
			if tmp != '0' {
				ans += strconv.Itoa(tmp)
			}
			x /= 10
		}

		k, _ := strconv.Atoi(ans)
		if k >= math.MaxInt32 || k < (-math.MaxInt32) {
			return 0
		}
		return k
	} else {
		xStr := strconv.Itoa(x)[1:]
		x, _ := strconv.Atoi(xStr)
		for x != 0 {
			tmp := x % 10
			if tmp != '0' {
				ans += strconv.Itoa(tmp)
			}
			x /= 10
		}
		ans = "-" + ans
		k, _ := strconv.Atoi(ans)
		if k >= math.MaxInt32 || k < (-math.MaxInt32) {
			return 0
		}
		return k
	}

}

func main() {
	fmt.Println(reverse(1534236469))
}
```

### 704. 二分查找

```go
package main

import "fmt"

func search(nums []int, target int) int {
	ans := -1
	for k, v := range nums {
		if v == target {
			ans = k
		}
	}
	return ans
}

func main() {
	nums := []int{-1,0,3,5,9,12}
	target := 2
	fmt.Println(search(nums, target))
}
```

### 728. 自除数

```go
package main

import "fmt"

func selfDividingNumbers(left int, right int) []int {
	var ans []int
	for i := left; i <= right; i++ {
		tmp := i
		for tmp > 0 {
			tmp2 := tmp % 10
			if tmp2==0 {
				break
			}
			if tmp2!=0&&i%tmp2 != 0 {
				break
			}
			tmp /= 10
		}
		if tmp == 0 {
			ans = append(ans, i)
		}
	}
	return ans
}

func main() {
	left := 1
	right := 22
	fmt.Println(selfDividingNumbers(left, right))
}
```

### 771. 宝石与石头

```go
package main

import (
	"fmt"
	"strings"
)

func numJewelsInStones(J string, S string) int {
	ans:=0
	for _,v:=range J{
		ans+=strings.Count(S,string(v))
	}
	return ans
}

func main()  {
	fmt.Println(numJewelsInStones("aA","aAAbbbb"))

}
```

### 784. 字母大小写全排列

```go
package main

import (
	"fmt"
	"strings"
	"unicode"
)

func letterCasePermutation(S string) []string {
	s := []string{}
	for k, v := range S {
		//判断是不是字母
		if unicode.IsLetter(v) {
			s = append(s, S[:k]+strings.ToLower(string(v))+S[k+1:])
			s = append(s, S[:k]+strings.ToUpper(string(v))+S[k+1:])
		}
	}
	if len(s) == 0 {
		return append(s, S)
	}
	return s
}

func main() {
	S := "12345"
	fmt.Println(letterCasePermutation(S))
}
```

### 884. 两句话中的不常见单词

```go
package main

import (
	"fmt"
	"strings"
)

func uncommonFromSentences(A string, B string) []string {
	arrA := strings.Split(A, " ")
	arrB := strings.Split(B, " ")
	arrA = append(arrA, arrB...)
	var answer []string
	for _, v1 := range arrA {
		i := 0
		for _, v2 := range arrA {
			if v1 == v2 {
				i++
			}
		}
		if i == 1 {
			answer = append(answer, v1)
		}
	}
	return answer
}

func main() {
	A := "this apple is sweet"
	B := "this apple is sour"
	fmt.Println(uncommonFromSentences(A, B))
}
```

### 9. 回文数

```go
package main

import (
	"fmt"
	"strconv"
)

func isPalindrome(x int) bool {
	sx := strconv.Itoa(x)
	l := len(sx)-1
	for i := 0; i <l; i++ {
		if sx[i] != sx[l-i] {
			return false
		}
	}
	return true
}

func main() {
	fmt.Println(isPalindrome(121))
}
```

### 905. 按奇偶排序数组

```go
package main

import "fmt"

func sortArrayByParity(A []int) []int {
	even := []int{}
	odd := []int{}

	for _, v := range A {
		if v%2 == 0 {
			even = append(even, v)
		} else {
			odd = append(odd, v)
		}
	}

	return append(even, odd...)
}

func main() {
	A := []int{3, 1, 2, 4}
	fmt.Println(sortArrayByParity(A))
}
```

### 917. 仅仅反转字母

```go
package main

import (
	"fmt"
	"unicode"
)

func reverseOnlyLetters(S string) string {
	var s string
	for _, k := range S {
		if unicode.IsLetter(k) {
			s = string(k) + s
		}
	}
	for k, v := range S {
		if !unicode.IsLetter(v) {
			s = s[:k] + string(v) + s[k:]
		}
	}

	return s
}

func main() {
	fmt.Println(reverseOnlyLetters("a-bC-dEf-ghIj"))
}
```

### 925. 长按键入

```go
package main

import "fmt"

func isLongPressedName(name string, typed string) bool {
	i,j:=0,0
	for i<len(name)&&j<len(typed){
		if name[i]==typed[j]{
			i++
			j++
		}else{
			if i==0{
				return false
			}
			if typed[j]==name[i-1]{
				j++
			}else{
				return false
			}
		}
	}

	if i<len(name){
		return false
	}
	return  true
}

func main() {
	name := "alex"
	typed := "aaleex"
	fmt.Println(isLongPressedName(name, typed))
}
```

### 94. 二叉树的中序遍历

```go
package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func inorderTraversal(root *TreeNode) (res []int) {

	var inOrder func(root *TreeNode)
	inOrder = func(root *TreeNode) {
		if root == nil {
			return
		}

		inOrder(root.Left)
		res = append(res, root.Val)
		inOrder(root.Right)
	}
	inOrder(root)
	return
}

func main() {
	node := &TreeNode{Val: 1, Left: nil, Right: &TreeNode{Val: 2, Left: &TreeNode{Val: 3, Left: nil, Right: nil}, Right: nil}}
	fmt.Println(inorderTraversal(node))
}
```

### 961. 重复 N 次的元素

```go
package main

import "fmt"

func repeatedNTimes(A []int) int {
	for i := 0; i < len(A)-2; i++ {
		if A[i] == A[i+1] || A[i] == A[i+2] {
			return A[i]
		}
	}
	return A[len(A)-1]
}

func main() {
	A := []int{1, 2, 3, 3}
	fmt.Println(repeatedNTimes(A))
}
```

### 977. 有序数组的平方

```go
package main

import (
	"fmt"
	"sort"
)

func sortedSquares(nums []int) []int {
	var tmp []int

	for _, v := range nums {
		tmp = append(tmp, v*v)
	}

	sort.Ints(tmp)
	return tmp
}

func main() {
	nums := []int{-4, -1, 0, 3, 10}
	fmt.Println(sortedSquares(nums))
}
```

### LCP 06. 拿硬币

```go
package main

import "fmt"

func minCount(coins []int) int {
	var ans int
	for _, v := range coins {
		if v%2 == 0 {
			ans = ans + v/2
		} else {
			ans = ans + v/2 + 1
		}
	}
	return ans
}

func main() {
	coins := []int{2, 3, 10}
	fmt.Println(minCount(coins))
}
```

### LCP 17. 速算机器人

```go
package main

import "fmt"

func calculate(s string) int {
	x := 1
	y := 0

	for _, v := range s {
		if string(v) == "A" {
			x = 2*x + y
		} else {
			y = 2*y + x
		}
	}
	return x + y
}

func main() {
	s := "AB"
	fmt.Println(calculate(s))
}
```

### 剑指 Offer 05. 替换空格

```go
package main

import (
	"fmt"
	"strings"
)

func replaceSpace(s string) string {
	return strings.Replace(s, " ", "%20", -1)
}

func main() {
	s := "We are happy."
	fmt.Println(replaceSpace(s))
}
```

### 剑指 Offer 15. 二进制中1的个数

```go
package main

import "fmt"

func hammingWeight(num uint32) int {
	var t int
	var tmp = num
	for tmp != 0 {
		if tmp&1 == 1 {
			t++
		}
		tmp = tmp >> 1
	}
	return t
}

func main() {
	var num uint32 = 11111111111111111111111111111101
	fmt.Println(hammingWeight(num))
}
```

### 剑指 Offer 58 - II. 左旋转字符串

```go
package main

import "fmt"

func reverseLeftWords(s string, n int) string {
	return s[n:] + s[:n]
}

func main() {
	s := "abcdefg"
	k := 2

	fmt.Println(reverseLeftWords(s, k))
}
```

### 剑指 Offer 64. 求1+2+…+n

```go
package main

import "fmt"

func sumNums(n int) int {
	if n == 0 {
		return 0
	}

	return n + sumNums(n-1)
}

func main() {
	n := 9
	fmt.Println(sumNums(n))
}
```

### 猜数字

```go
package main

import "fmt"

func game(guess []int, answer []int) int {
	i := 0
	for k, _ := range guess {
		if guess[k] == answer[k] {
			i = i + 1
		}
	}
	return i
}

func main() {
	guess := []int{2,2,3}
	answer := []int{3,2,1}
	fmt.Println(game(guess, answer))
}
```

### 面试题 01.01. 判定字符是否唯一

```go
package main

import "fmt"

func isUnique(astr string) bool {
	
}

func main()  {
	s:="leetcode"
	fmt.Println(isUnique(s))
}
```

### 面试题 01.03. URL化

```go
package main

import (
	"fmt"
	"strings"
)

func replaceSpaces(S string, length int) string {
	//var ans string
	//sLen := len(S)
	//if sLen < length {
	//	length = sLen
	//}
	//fmt.Println(length)
	//for i := 0; i < length; i++ {
	//	if S[i] == ' ' {
	//		ans += "%20"
	//		continue
	//	}
	//	ans += string(S[i])
	//}
	//return ans
	return strings.Replace(S[:length]," ","%20",-1)
}

func main() {
	s := "               "
	len := 5
	fmt.Println(replaceSpaces(s, len))
}
```

### 面试题 01.07. 旋转矩阵

```go
package main

import "fmt"

func rotate(matrix [][]int) {

}

func main() {
	matrix := [][]int{
		{1, 2, 3},
		{4, 5, 6},
		{7, 8, 9},
	}

	rotate(matrix)
	fmt.Println(matrix)
}
```

### 面试题 02.03. 删除中间节点

```go
package main

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteNode(node *ListNode) {
	node.Val = node.Next.Val
	node.Next = node.Next.Next
}

func main() {

}
```

### 面试题 03.02. 栈的最小值

```go
package main

type MinStack struct {
	arr []int
}

/** initialize your data structure here. */
func Constructor() MinStack {
	return MinStack{}
}

func (this *MinStack) Push(x int) {
	this.arr = append(this.arr, x)
}

func (this *MinStack) Pop() {
	this.arr = this.arr[:len(this.arr)-1]
}

func (this *MinStack) Top() int {
	return this.arr[len(this.arr)-1]
}

func (this *MinStack) GetMin() int {
	if len(this.arr) == 0 {
		return 0
	}

	arrMin := this.arr[0]
	for _, v := range this.arr {
		if v < arrMin {
			arrMin = v
		}
	}
	return arrMin
}

func main() {
	obj := Constructor()
	obj.Push(-2)
	obj.Push(0)
	obj.Push(-3)

	print(obj.GetMin())
	obj.Pop()

	print(obj.Top())
	print(obj.GetMin())
}
```

### 面试题 10.05. 稀疏数组搜索

```go
package main

import "fmt"

func findString(words []string, s string) int {
	ans:=-1
	for i:=0;i<len(words);i++{
		if words[i]==s {
			return i
		}
	}
	return ans
}

func main()  {
	words:=[]string{"at", "", "", "", "ball", "", "", "car", "", "","dad", "", ""}
	s:="ball"
	fmt.Println(findString(words,s))
}
```

### 面试题 16.02. 单词频率

```go
package main

type WordsFrequency struct {
	books map[string]int
}

func Constructor(book []string) WordsFrequency {
	m := map[string]int{}

	for _, v := range book {
		m[v]++
	}
	return WordsFrequency{m}
}

func (this *WordsFrequency) Get(word string) int {

	return this.books[word]
}

func main() {

}
```

### 面试题 16.17. 连续数列

```go
package main

import "fmt"

func maxSubArray(nums []int) int {
	b:=nums[0]
	sum:=b
	for i:=1;i<len(nums);i++{
		if b<0 {
			b=nums[i]
		}else {
			b+=nums[i]
		}
		if b>sum {
			sum=b
		}
	}
	return sum
}
func main()  {
	nums:=[]int{-2,1,-3,4,-1,2,1,-5,4}
	fmt.Println(maxSubArray(nums))
}

```

### 面试题 17.04. 消失的数字

```go
package main

import (
	"fmt"
	"sort"
)

func missingNumber(nums []int) int {
	sort.Ints(nums)
	for k,v:=range nums{
		if k!=v {
			return k
		}
		if v==len(nums)-1 {
			return len(nums)
		}
	}
	return 1
}

func main()  {
	nums:=[]int{0,1}
	fmt.Println(missingNumber(nums))
}
```

### 面试题 17.10. 主要元素

```go
package main

import "fmt"

func majorityElement(nums []int) int {
	var m = make(map[int]int)
	for _, v := range nums {
		m[v]++
	}
	l := len(nums)
	for k, v := range m {

		if v > l/2 {
			return k
		}
	}
	return -1
}

func main() {
	nums := []int{3,2,3}
	fmt.Println(majorityElement(nums))
}
```

### 面试题 17.11. 单词距离

```go
package main

import (
	"fmt"
	"math"
)

func findClosest(words []string, word1 string, word2 string) int {
	res := 1
	one, two := math.MaxInt32, math.MaxInt32
	wordsTmp := make([]int, len(words))
	for k, v := range words {
		if v == word1 {
			wordsTmp[k] = 1
		}

		if v == word2 {
			wordsTmp[k] = 2
		}
	}

	for _, v := range wordsTmp {
		if v == 1 {
			one = v
		}
		if v == 2 {
			two = v
		}
		res = int(math.Min(float64(res), float64(two-one)))
	}
	return res
}

func main() {
	words := []string{"I", "am", "a", "student", "from", "a", "university", "in", "a", "city"}
	word1 := "a"
	word2 := "student"
	fmt.Println(findClosest(words, word1, word2))
}
```

### 面试题18. 删除链表的节点

```go
package main

import "fmt"

type ListNode struct {
	Val  int
	Next *ListNode
}

func deleteNode(head *ListNode, val int) *ListNode {
	if head == nil {
		return nil
	}
	dummy := &ListNode{Next: head}

	for cur := dummy; cur != nil && cur.Next != nil; cur = cur.Next {
		if cur.Next.Val == val {
			cur.Next = cur.Next.Next
		}
	}
	return dummy.Next
}

func main() {
	head := &ListNode{Val: 4, Next: &ListNode{Val: 5, Next: &ListNode{Val: 1, Next: &ListNode{Val: 9, Next: nil}}}}
	//for head.Next != nil {
	//	fmt.Println(head.Val)
	//	head.Next = head.Next.Next
	//}
	fmt.Println(deleteNode(head, 5))
}
```

### 面试题32 - II. 从上到下打印二叉树 II

```go
package main

import "fmt"

type TreeNode struct {
	Val   int
	Left  *TreeNode
	Right *TreeNode
}

func levelOrder(root *TreeNode) [][]int {
	if root ==nil{
		return nil
	}
	var res [][]int
	queue:=[]* TreeNode{}
	queue=append(queue,root)
	for len(queue)!=0{
		r:=[]int{}
		for i:=0;i<len(queue);i++{
			node:=queue[0]
			queue=queue[1:]
			r=append(r,node.Val)
			if node.Left!=nil{
				queue=append(queue,node.Left)
			}
			if node.Right!=nil {
				queue=append(queue,node.Right)
			}
		}
		res=append(res,r)
	}

	return res
}

func main() {
	tn := &TreeNode{Val: 3, Left: &TreeNode{Left: nil, Right: nil}, Right: &TreeNode{Val: 20, Left: &TreeNode{Val: 15, Left: nil, Right: nil}, Right: &TreeNode{Val: 7, Left: nil, Right: nil}}}
	fmt.Println(levelOrder(tn))
}
```

### 面试题40. 最小的k个数

```go
package main

import (
	"fmt"
	"sort"
)

func getLeastNumbers(arr []int, k int) []int {
	sort.Ints(arr)
	return arr[:k]
}

func main()  {
	arr:=[]int{0,1,2,1}
	k:=1
	fmt.Println(getLeastNumbers(arr,k))
}
```


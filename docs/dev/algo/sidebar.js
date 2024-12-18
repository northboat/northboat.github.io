module.exports = [
	{
		title: "算法设计与分析",
		collapsable: true,
		children: [
			'./basic/algo-c',
			'./basic/algo-outline-recursive-divide',
			'./basic/algo-dp-greedy',
			'./basic/algo-backtracking-branchbound-lp-networkflow',
		]
	},
	
	{
		title: "算法笔记",
		collapsable: true,
		children: [
			{
				title: "NEUQ",
				collapsable: true,
				children: [
					'./code/leetcode-modeling-hash-binary',
					'./code/leetcode-recursion-divide',
					'./code/leetcode-sort',
					'./code/leetcode-bfs-branching-boundary',
					'./code/leetcode-dfs-backtracking',
					'./code/leetcode-dp-greedy',
				]
			},
			{
				title: "XDU",
				collapsable: true,
				children: [
					'./code/leetcode-job',
				]
			}
		]
	},
	
	{
		title: "人工智能算法",
		collapsable: true,
		children: [
			'./ai/ai-grid-world',
			'./ai/ai-tic-tac-toe',
		]
	},

	{
		title: "数据结构实现及算法",
		collapsable: true,
		children: [
			'./ds/data-structure-design',
			'./ds/data-structure-algo',
		]
	},

	
	
]

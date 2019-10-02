const category = [
	{
		id: '1',
		title: '2019年度',
		pid: '0',
		sort: 0,
		children: [
			{
				id: '2',
				title: '重要事件',
				pid: '1',
				sort: 0,
				children: [
					{
						id: '8',
						title: 'xxx',
						pid: '2',
						sort: 0,
						children: []
					},
					{
						id: '9',
						title: 'XX',
						pid: '2',
						sort: 1,
						children: []
					}
				]
			},
			{
				id: '3',
				title: '一般事件',
				pid: '1',
				sort: 1,
				children: []
			},
			{
				id: '11',
				title: '测试1',
				pid: '1',
				sort: 0,
				children: [
					{
						id: '12',
						title: '哈哈哈哈哈哈',
						pid: '11',
						sort: 0,
						children: []
					}
				]
			}
		]
	},
	{
		id: '4',
		title: '2018年度',
		pid: '0',
		sort: 1,
		children: [
			{
				id: '5',
				title: '重要事件',
				pid: '4',
				sort: 0,
				children: []
			},
			{
				id: '6',
				title: '一般事件',
				pid: '4',
				sort: 1,
				children: []
			},
			{
				id: '7',
				title: '恐怖事件',
				pid: '4',
				sort: 2,
				children: []
			}
		]
	}
];
function treeMode(node) {
	if (node.children) {
		return treeMode(node.children);
	} else {
		return node.map(e => ({ title: e.title, key: e.id, children: treeMode(e.children) }));
	}
}
console.log('treeMode(category): ', JSON.stringify(treeMode(category)));
interface nodeModel {
	id: string;
	title: string;
	pid: string;
	sort: number;
	children?: nodeModel[];
}

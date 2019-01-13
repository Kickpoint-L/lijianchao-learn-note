var map = new BMap.Map("allmap"); // 创建Map实例
map.centerAndZoom(new BMap.Point(113.764401, 34.76981), 16); // 初始化地图,设置中心点坐标和地图级别
//添加地图类型控件
map.addControl(new BMap.MapTypeControl({
    mapTypes: [
        BMAP_NORMAL_MAP,
        BMAP_HYBRID_MAP
    ]
}));
// 左上角，添加比例尺
map.addControl(new BMap.ScaleControl({ anchor: BMAP_ANCHOR_TOP_LEFT }));
//左上角，添加默认缩放平移控件        
map.addControl(new BMap.NavigationControl());
//右上角，仅包含平移和缩放按钮    
map.addControl(new BMap.NavigationControl({ anchor: BMAP_ANCHOR_TOP_RIGHT, type: BMAP_NAVIGATION_CONTROL_SMALL }));
// map.addControl(top_left_navigation);     
// map.addControl(top_right_navigation);   	  
map.setCurrentCity("郑州"); // 设置地图显示的城市 此项是必须设置的
// map.enableScrollWheelZoom(true);     //开启鼠标滚轮缩放
var point = new BMap.Point(113.774139, 34.77657);
//添加涂层
//自定义图标
var myIcon = new BMap.Icon("logo.png", new BMap.Size(50, 37));
var marker = new BMap.Marker(point, { icon: myIcon }); // 创建标注
map.addOverlay(marker); // 将标注添加到地图中
marker.setAnimation(BMAP_ANIMATION_BOUNCE); //跳动的动画
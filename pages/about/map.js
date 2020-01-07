export function fun1() {
src="http://api.map.baidu.com/api?v=3.0&ak=NeNEy66Cv0crzs3ktX7dLMgzzOfhZugv"

    var map = new BMap.Map('container');
    // 创建地图实例  
    var point = new BMap.Point(116.404, 39.915);
    // 创建点坐标  
    map.centerAndZoom(point, 15);
    window.setTimeout(function(){  
        map.panTo(new BMap.Point(116.409, 39.918));    
    }, 2000);
  
  }
# 模板
用于设置生成文件的模板，理论上是可以生成任何您所需要的文件的，在安装时，系统已默认安装了一组模版文件

### UI界面

![模板](/template.png)


### 说明

#### 列表说明：

* 路径:文件所生成的相对路径，以项目所在的目录为根路径
* 是否选中:在生成器界面，文件是否默认自动勾选生成
* 所属组：将文件进行分组，方便生成文件的管理
* 编辑：可以对模板信息进行编辑

#### 模板字段说明：

##### 基础字段：
  * DummyDisplayName：显示名称,如用户地址
  * DummyClass：类名称,如：UserAddress
  * DummyCamelClass：类的驼峰名，如：userAddress
  * DummySnakeClass：类小写，如user_address
  * DummyPluralClass:类的复数，如Users
  * DummySnakePluralClass:类小写复数，如users

##### 全局变量：
  * `$tableFields`：所有的表字段数据，通过@foreach遍历循环表字段，取出表数据
  * `$customKeys`：自定义的键值对,如 `$customKeys['author']`
  * `$relationShips`：关联关系的数据,
  * `$modelFields`：模型相关的数据，如`primary_key`,`timestamps`,`soft_deletes`

##### 模板渲染
  * 使用的[blade](https://laravel.com/docs/12.x/blade)进行模板的处理

##### 模板示例

```js
<?php
/**
 *
 * DummyDisplayName
 * author: {{$customKeys['author']}}
 * created_at: {{ date('Y-m-d H:i:s') }}
 */
namespace App\Http\Controllers\Admin;

use App\Models\DummyClass;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Http\Controllers\Controller;
use Illuminate\Database\Eloquent\Builder;

class DummyClassController extends Controller
{

  public function index(Request $request): JsonResponse
  {
        $create_start_time = $request->get('create_start_time');
        $create_end_time = $request->get('create_end_time');
@foreach($tableFields as $field)
@if($field['can_search'])
        ${{$field['field_name'] }} = $request->get('{{$field['field_name'] }}');
@endif
@endforeach
      $data = DummyClass::orderByDesc('id')
@foreach($tableFields as $field)
@if($field['can_search'])
@if('numeric'==$field['rule'])
              ->when(${{$field['field_name'] }}, fn (Builder $query) => $query->where('{{$field['field_name'] }}',  ${{$field['field_name'] }}))
@elseif('string'==$field['rule'])
      ->when(${{$field['field_name'] }}, fn (Builder $query) => $query->where('{{$field['field_name'] }}', 'like', "%${{$field['field_name'] }}%"))
@else
      ->when(${{$field['field_name'] }}, fn (Builder $query) => $query->where('{{$field['field_name'] }}', 'like', "%${{$field['field_name'] }}%"))
@endif
@endif
@endforeach
      ->when($create_start_time, fn (Builder $query) => $query->where('created_at', '>=', $create_start_time))
      ->when($create_end_time, fn (Builder $query) => $query->where('created_at', '<=', $create_end_time))
      ->paginate();
      
      $data->getCollection()->transform(function (DummyClass $DummySnakeClass){
          //$DummySnakeClass->setAttribute('id', 'ID');
        
          return $DummySnakeClass;
      });
      
      return response()->json(['message' => 'success', 'errcode' => 0, 'data' => $data->toArray()]);
    }

    public function update(Request $request)
    {
                $id = (int)$request->get('id');
                $DummySnakeClass = null;
                if($id){
                  $DummySnakeClass = DummyClass::whereId($id)->first();
                }
                $data=$request->validate([
                  'id' => 'required|int',
@foreach($tableFields as $field)
    @if('string'==$field['rule'] && false==$field['nullable'])
                '{{$field['field_name'] }}' => 'required'
@endif
@endforeach
              ],[],[
                'id' => 'ID',
@foreach($tableFields as $field)
@if('string'==$field['rule'] && false==$field['nullable'])
                '{{$field['field_name'] }}' => '{{$field['field_display_name'] }}'
@endif
@endforeach
              ]);
              
                if(!$DummySnakeClass){
                  $DummySnakeClass=new DummyClass();
                }
                $DummySnakeClass->fill($data);
                if($DummySnakeClass->save()){
                  return response()->json(['message' => '保存成功', 'errcode' => 0, 'data' => []]);
                }
                return response()->json(['message' => '保存失败', 'errcode' => 1, 'data' => []]);
    }

    public function delete(Request $request)
    {
          $id = (int)$request->get('id');
          $DummySnakeClass = DummyClass::whereId($id)->first();
          if($DummySnakeClass && $DummySnakeClass->delete()){
            return response()->json(['message' => '删除成功', 'errcode' => 0, 'data' => []]);
          }
          return response()->json(['message' => '删除失败', 'errcode' => 1, 'data' => []]);
    }
}
```

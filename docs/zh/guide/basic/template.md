# 模板
用于设置生成文件的模板，理论上是可以生成任何您所需要的文件的，在安装时，系统已默认安装了一组模版文件

### UI界面

![模板](/template.png)


### 说明
列表说明：
* 路径:文件所生成的相对路径，以项目所在的目录为根路径
* 是否选中:在生成器界面，文件是否默认自动勾选生成
* 所属组：将文件进行分组，方便生成文件的管理
* 编辑：可以对模板信息进行编辑

模板字段说明：
* 基础字段：
  * DummyDisplayName：显示名称,如用户地址
  * DummyClass：类名称,如：UserAddress
  * DummyCamelClass：类的驼峰名，如：userAddress
  * DummySnakeClass：类小写，如user_address
  * DummyPluralClass:类的复数，如Users
  * DummySnakePluralClass:类小写复数，如users
  * DummyAuthor：作者
* 模板渲染
  * 使用的[BaiduTemplate](https://wangxiao.github.io/BaiduTemplate/)进行模板的处理

模板示例
```js
<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
<%* soft delete *%>
<%if(DummyModelFields.soft_deletes){%>
use Illuminate\Database\Eloquent\SoftDeletes;
<%}%>

class DummyClass extends Model
{
    /** @use HasFactory<\Database\Factories\DummyClassFactory> */
    use HasFactory;
<%if(DummyModelFields.soft_deletes){%>
     use SoftDeletes;
<%}%>
     protected $fillable = [<%for(item of DummyTableFields){%><%if('id'!=item.field_name) { %>'<%=item.field_name%>',<%}%><%}%>];

<%if(!DummyModelFields.timestamps){%>
     public $timestamps = false;
<%}%>

<%for(relationship of DummyRelationShips){%>
    <%if('hasMany'==relationship.relationship) { %>
     public function <%=relationship.snake_plural_model%>(){
         return $this->hasMany(<%=relationship.model%>::class<%if(relationship.foreign_key) { %>,'<%=relationship.foreign_key%>'<%}%>);
     }

    <%}else{%>
     public function <%=relationship.snake_model%>(){
         return $this-><%=relationship.relationship%>(<%=relationship.model%>::class<%if(relationship.foreign_key) { %>,'<%=relationship.foreign_key%>'<%}%>);
     }

    <%}%>
<%}%>

}
```

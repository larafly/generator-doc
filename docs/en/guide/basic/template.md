# Templates
Used to set the templates for generating files. Theoretically, it can generate any file you need. A set of template files was pre-installed during installation.

### UI Interface

![Templates](/template.png)

### Description
**List Description:**
* **Path:** The relative path where the file will be generated, with the project directory as the root.
* **Selected:** Whether the file is automatically checked for generation in the generator interface.
* **Group:**  Groups files together for easier management of generated files.
* **Edit:** Allows editing of template information.

**Template Field Description:**
* **Basic Fields:**
  * **DummyDisplayName:** Display name, such as User Address.
  * **DummyClass:** Class name, such as UserAddress.
  * **DummyCamelClass:** Camel case class name, such as userAddress.
  * **DummySnakeClass:** Lowercase class name, such as user_address.
  * **DummyPluralClass:** Plural class name, such as Users.
  * **DummySnakePluralClass:** Lowercase plural class name, such as users.
  * **DummyAuthor:** Author.
* **Template Rendering**
  * Uses [BaiduTemplate](https://wangxiao.github.io/BaiduTemplate/) for template processing.

Template Example
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

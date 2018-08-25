<template>
  <div id="GDaylyManage">
       <div class="GSystemManagement_right">
            <div class="role">
                <form>
                    操作类型：
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                    </select>
                    操作人：<input type="text" class="operator"/>
                    操作日期：<input type="text" /><img src="../../assets/u1935.png" />
                    &nbsp;至&nbsp;&nbsp;<input type="text" /><img src="../../assets/u1935.png" />
                    <span><img src="../../assets/u1917.png" class="search" />查询</span>
                </form>
            </div>
            <table>
                <tr v-for=" i in 9">
                    <td>编号</td>
                    <td>角色名称</td>
                    <td>角色描述</td>
                    <td>操作</td>
                    <td>操作</td>
                </tr>      
            </table>
            <g-paper />
       </div>
  </div>
</template>

<script>
    import GPaper from './GPaper'
    export default {
      data () {
        return {
        }
      },
      components: { 
        GPaper
       }
    }
</script>

<style scoped>
    #GDaylyManage{
    	width: 100%;
    }
   .GSystemManagement_right{
        heihgt: 100%;
        height: 600px;
        padding: 0 18px;
        margin: 0 auto;
    }
    .GSystemManagement_right> table{
        width: 100%;
        text-align:center;
    }
    .GSystemManagement_right> table>tr{
        width: 100%;
        height:53px;
    }
    .GSystemManagement_right> table>tr:nth-of-type(odd){
      background: #fff;
    }
    .GSystemManagement_right> table>tr:nth-of-type(even){
      background: #fafafa;
    }
    .GSystemManagement_right> table>tr>td{
        width: 20%;
    }
     .GSystemManagement_right .role{
         width: 100%;
         height: 70px;
         font-size: 16px;
     }
     .GSystemManagement_right .role form{
         height: 70px;
         width: 100%;
         line-height: 70px;
         font-weight: bold;
     }
     .GSystemManagement_right .role select{
         width:136px;
         height: 29px;
         margin-right: 50px;
     }
     .GSystemManagement_right .role input{
         width:136px;
         height: 29px;
     }
     .GSystemManagement_right .role .operator{
        margin-right: 50px;
     }
      .GSystemManagement_right .role img{
          width: 24px;
          height: 24px;
          margin-left: 5px;
          vertical-align: middle;
         cursor:pointer;
      }
      .GSystemManagement_right .role .search{
          width: 19px;
          height: 19px;
          margin: 0 10px 0 200px;
      }


      
      .GSystemManagement_right .role span{
      vertical-align: -3px;
      }

</style>

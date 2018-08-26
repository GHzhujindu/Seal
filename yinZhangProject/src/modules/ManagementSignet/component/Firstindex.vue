<template>
    <div class="Signet">
        <div class="signets">
            <el-row>
                <span>待制作</span>
                <el-button type="info" plain @click="ZNewltype">进入</el-button>
            </el-row>
            <el-table :data="tableData" stripe>
                <el-table-column prop="date" label="印章名称">
                </el-table-column>
                <el-table-column prop="name" label="制作时间">
                </el-table-column>
                <el-table-column prop="address" label="当前状态">
                </el-table-column>
                <el-table-column prop="address" label="启用时间">
                </el-table-column>
                <el-table-column prop="name" label="制作时间">
                </el-table-column>
            </el-table>
        </div>
        <div class="signets">
            <el-row>
                <span>已制作</span>
                <el-button type="info" plain @click="ZNewltype">进入</el-button>
            </el-row>
            <el-table :data="tableData" stripe>
                <el-table-column prop="date" label="印章名称">
                </el-table-column>
                <el-table-column prop="name" label="制作时间">
                </el-table-column>
                <el-table-column prop="address" label="当前状态">
                </el-table-column>
                <el-table-column prop="address" label="启用时间">
                </el-table-column>
                <el-table-column prop="name" label="制作时间">
                </el-table-column>
            </el-table>
        </div>
        <div class="signets">
            <el-row>
                <span>已发布</span>
                <el-button type="info" plain @click="ZNewltype">进入</el-button>
            </el-row>
            <el-table :data="tableData" stripe>
                <el-table-column prop="date" label="印章名称">
                </el-table-column>
                <el-table-column prop="name" label="制作时间">
                </el-table-column>
                <el-table-column prop="address" label="当前状态">
                </el-table-column>
                <el-table-column prop="address" label="启用时间">
                </el-table-column>
                <el-table-column prop="name" label="制作时间">
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            tableData: [{
                date: '2',
                name: '王小虎',
                address: '上海市普陀'
            }, {
                date: '2',
                name: '王小虎',
                address: '上海市普陀',
            }, {
                date: '20',
                name: '王小虎',
                address: '上海市普陀'
            }, {
                date: '4',
                name: '王小虎',
                address: '上海市普陀区',
            }, {
                date: '2',
                name: '王小虎',
                address: '上海市普陀',
            }]
        }
    }
}
</script>

<style>
.el-table {
    height: 80%;
}

.el-table__body tr {
    height: 20%;
}

.el-table td {
    padding: 8px 0;
}
</style>
<style lang="scss" scoped>
.signet {
    width: 100%;
    height: 100%;
    min-width: 736px;
}

.signets {
    width: 45%;
    height: 50%;
    min-width: 360px;
    display: inline-block;
    .el-table {
        height: 80%;
        tr {
            height: 20%;
        }
        td {
            padding: 0;
        }
    }
    button {
        float: right;
    }
    span {
        display: inline-block;
        height: 40px;
        line-height: 40px;
    }
}
</style>

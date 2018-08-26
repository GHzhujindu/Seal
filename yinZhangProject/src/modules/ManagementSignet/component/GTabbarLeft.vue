<template>
    <div class="GTabbarLeft">
        <ul>
            <li :class="{ active: item.isActive }" v-for="(item,ind) in menus" :key="ind" @click="ZmenuClick(item.path,ind)">
                <img :src="item.img">{{item.label}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            menus: [
                {
                    label: "印章管理",
                    img: require('@/assets/u13.png'),
                    path: "ManagementSignet",
                    isActive: false
                },
                {
                    label: "印章审批",
                    img: require('@/assets/u18.png'),
                    path: "Zlogguanli",
                    isActive: false
                }
            ]
        }
    },
    methods: {
        ZmenuClick(path, index) {
            this.menus.forEach((val, ind) => {
                val.isActive = ind == index ? true : false;
            })
            this.$router.push({ path: path })
        }
    }
}
</script>

<style scoped>
.GTabbarLeft {
    width: 100%;
    height: 100%;
}

.GHeader {
    width: 100%;
    height: 82px;
    line-height: 82px;
    background: #ff6618;
    text-align: center;
}

.GHeader>img {
    width: 144px;
    height: 54px;
    margin-top: 14px;
}

ul {
    width: 100%;
    height: 100%;
    background: #333333;
    color: #fff;
}

li {
    height: 70px;
    width: 100%;
    line-height: 70px;
    border-bottom: 2px solid #4b4b4b;
    cursor: pointer;
}

li img {
    margin: 0 15px 0 20px;
    width: 17px;
    height: 17px;
    vertical-align: -2px;
}

.active {
    border-bottom: 2px solid red!important;
}
</style>

export const request=(params)=>{
    const Baseurl="https://api-hmugo-web.itheima.net/api/public/v1";
    return new Promise((resolve,reject)=>{
        wx.request({
            ...params,
            url:Baseurl+params.url,
            success:(result)=>{
                resolve(result);
            },
            fail:(err)=>{
                reject(err);
            }
        });
    })
}

function get_url() {
    return document.getElementById('testurl').value.trim();
}

function log_result(is_success, msg, data){

    var result_element = document.getElementById('result');
    var result_data_element = document.getElementById('result-data');

    result_element.className = is_success ? 'success-msg' : 'failure-msg';

    result_element.innerHTML = msg;

    var pretty_json = JSON.stringify(data,null, 2);
    // Both below needed else update of textarea stops fir any requests after someone manually types in the textarea
    result_data_element.innerHTML = pretty_json;
    result_data_element.value = pretty_json;
}

function do_http_req(axios_fn){
    var url = get_url();
    if (url == ''){
        log_result(false,'URL cannot be empty!',{});
    }
    else{
        axios_fn(get_url())
    .then(function (response) {
        log_result(true,'Success',response);
    })
    .catch(function (error) {
        log_result(false,'Error',error);
    });
    }
}

function do_get() {
    do_http_req(axios.get)
}

function do_post() {
    do_http_req(axios.post)
}

function do_put() {
    do_http_req(axios.put)
}

function do_delete() {
    do_http_req(axios.delete)
}
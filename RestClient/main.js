
function get_url() {
    return document.getElementById('testurl').value.trim();
}

function update_result_text(obj){
    var pretty_json = JSON.stringify(obj,null, 2);
    // Both below needed because else update stops after someone manually types in the text area
    var data_element = document.getElementById('result-data')
    data_element.innerHTML = pretty_json;
    data_element.value = pretty_json;
}

function log_success(data){
    document.getElementById('result').className = 'success-msg';
    document.getElementById('result').innerHTML = 'Success';
    update_result_text(data);
}

function log_error(err){
    document.getElementById('result').className = 'failure-msg';
    document.getElementById('result').innerHTML = 'Error';
    update_result_text(err);
}

function do_http_req(axios_fn){
    axios_fn(get_url())
    .then(function (response) {
        log_success(response);
    })
    .catch(function (error) {
        log_error(error);
    });
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
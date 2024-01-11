import instance from ".";

export function list(){ 
    return instance.get("/pets")
}

export function get(id){
    return instance.get("/pets/"+id)
}

export function create(pet){
    return
    instance.post ("/pets",pet);
}
export function destroy (id){
    return instance .delete("/pets/"+id);
}

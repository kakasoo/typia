//-------------------------------------------------
// MESSAGE
//-------------------------------------------------
// syntax = "proto3";
//
// message ArraySimpleProtobuf {
//     repeated bool boolean = 1;
//     repeated int32 int32 = 2;
//     repeated uint32 uint32 = 3;
//     repeated int64 int64 = 4;
//     repeated uint64 uint64 = 5;
//     repeated float float = 6;
//     repeated double double = 7;
//     repeated string string = 8;
//     repeated bytes bytes = 9;
//     repeated ArraySimpleProtobuf object = 10;
// }

//-------------------------------------------------
// GOOGLE
//-------------------------------------------------
function ArraySimpleProtobuf$decode(r, l) {
    if (!(r instanceof Reader)) r = Reader.create(r);
    var c = l === undefined ? r.len : r.pos + l,
        m = new this.ctor();
    while (r.pos < c) {
        var t = r.uint32();
        switch (t >>> 3) {
            case 1: {
                if (!(m.boolean && m.boolean.length)) m.boolean = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2) m.boolean.push(r.bool());
                } else m.boolean.push(r.bool());
                break;
            }
            case 2: {
                if (!(m.int32 && m.int32.length)) m.int32 = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2) m.int32.push(r.int32());
                } else m.int32.push(r.int32());
                break;
            }
            case 3: {
                if (!(m.uint32 && m.uint32.length)) m.uint32 = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2) m.uint32.push(r.uint32());
                } else m.uint32.push(r.uint32());
                break;
            }
            case 4: {
                if (!(m.int64 && m.int64.length)) m.int64 = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2) m.int64.push(r.int64());
                } else m.int64.push(r.int64());
                break;
            }
            case 5: {
                if (!(m.uint64 && m.uint64.length)) m.uint64 = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2) m.uint64.push(r.uint64());
                } else m.uint64.push(r.uint64());
                break;
            }
            case 6: {
                if (!(m.float && m.float.length)) m.float = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2) m.float.push(r.float());
                } else m.float.push(r.float());
                break;
            }
            case 7: {
                if (!(m.double && m.double.length)) m.double = [];
                if ((t & 7) === 2) {
                    var c2 = r.uint32() + r.pos;
                    while (r.pos < c2) m.double.push(r.double());
                } else m.double.push(r.double());
                break;
            }
            case 8: {
                if (!(m.string && m.string.length)) m.string = [];
                m.string.push(r.string());
                break;
            }
            case 9: {
                if (!(m.bytes && m.bytes.length)) m.bytes = [];
                m.bytes.push(r.bytes());
                break;
            }
            case 10: {
                if (!(m.object && m.object.length)) m.object = [];
                m.object.push(types[9].decode(r, r.uint32()));
                break;
            }
            default:
                r.skipType(t & 7);
                break;
        }
    }
    return m;
}

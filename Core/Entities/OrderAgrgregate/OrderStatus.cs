using System.Runtime.Serialization;

namespace Core.Entities.OrderAgrgregate
{
    public enum OrderStatus
    {
        [EnumMember(Value ="Pending")]
        Pending,

        [EnumMember(Value ="Payment Recieved")]
        PaymentRecieved,

        [EnumMember(Value ="Payment Failed")]
        PaymentFailed
    }
}
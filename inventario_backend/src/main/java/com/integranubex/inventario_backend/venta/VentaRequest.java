package com.integranubex.inventario_backend.venta;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import jakarta.validation.constraints.DecimalMin;
import jakarta.validation.constraints.Digits;
import java.math.BigDecimal;

public record VentaRequest(
        Integer idCliente,
        @NotBlank(message = "El tipo de comprobante es obligatorio.") @Size(max = 20, message = "El tipo de comprobante no puede superar 20 caracteres.") String tipoComprobante,
        @Size(max = 10, message = "La serie no puede superar 10 caracteres.") String serie,
        @Size(max = 20, message = "El número no puede superar 20 caracteres.") String numero,
        @NotBlank(message = "El medio de pago es obligatorio.") @Size(max = 20, message = "El medio de pago no puede superar 20 caracteres.") String medioPago,
        String tipoBoleta,
        @DecimalMin("0.00") @Digits(integer = 10, fraction = 2) BigDecimal montoRecibido,
        @Size(max = 50) String yapeNumeroOperacion,
        @Size(max = 50) String yapeCodigoSeguridad) {
}
